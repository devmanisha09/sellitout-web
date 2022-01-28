<template>
    <ps-modal ref="psmodal" line="hidden" :isClickOut="true" > 
        <template #title>
            <ps-label class='mb-2'> {{ $t("map_with_circle_filter_moadl__title") }} </ps-label>
        </template>
        <template #body>
            <GoogleMap id="map" ref="map_ref" :api-key="map.key" :draggable="true"
                :center="map.center" :zoom="map.zoom"  style="width: 100%; height: 400px">
                <Circle id="circle" :options="circleCenter" ref="cir_ref" @dragend="dragend" @click="radius_changed" />
            </GoogleMap>

            <ps-label class='mt-1'> {{ radius }} {{ $t("map_with_circle_filter_moadl__miles") }} </ps-label>
            <input  type="range" id="vol" name="vol" min="1" max="300" v-model="radius" @input="rangeChanged" class=' w-full'>
        </template>
        <template #footer>
            <div class="flex justify-between">
                <ps-button @click="psmodal.toggle(false)" class='' theme='btn-second'> {{ $t("map_with_circle_filter_moadl__cancel") }} </ps-button>
                <ps-button @click="pickedLocation"> {{ $t("map_with_circle_filter_moadl__pick_location") }} </ps-button>
            </div>
        </template>
    </ps-modal>
</template>

<script lang='ts'>
import { defineComponent, ref } from 'vue';
import { GoogleMap , Circle  } from 'vue3-google-map'; 
import PsModal from '@/components/core/modals/PsModal.vue';
import PsButton from '@/components/core/buttons/PsButton.vue';
import PsConfig from '@/config/PsConfig';
import PsLabel from '@/components/core/label/PsLabel.vue';
import PsUtils from '@/utils/PsUtils';

export default defineComponent({
    name : "MapWithCircleFilterModal",
    components: {
        PsModal,
        GoogleMap,
        Circle,
        PsButton,
        PsLabel
    },
    setup() {
        const psmodal = ref();
        const map_ref = ref();
        const cir_ref = ref();
        const m_to_mi = 1610;
        let updateLatLng : Function;
        const lat =ref();
        const lng = ref();
        const radius = ref(1);

        const mcenter = ref({
            position : {
            lat: 40.876945,
            lng: 77.387978 
            },
            draggable: true
        });

        const map = ref({
            key: PsConfig.mapKey,
            center: mcenter.value.position,
            zoom: 15
        });

        function pickedLocation() {
            lat.value = cir_ref.value.circle.component.value.getCenter().lat();
            lng.value = cir_ref.value.circle.component.value.getCenter().lng();
            updateLatLng(lat.value, lng.value, radius.value);
            psmodal.value.toggle(false);
        }

        function updateCoordinates(location) {
           
            lat.value = location.latLng.lat();
            lng.value = location.latLng.lng();            
        }

        function openModal(lat: number, lng: number, mile: number, updateLocation: Function) {
            
            if(lat != 0) {
                mcenter.value.position.lat = lat;                
            }

            if(lng != 0) {
                mcenter.value.position.lng = lng;
            }
            
            if(lat != 0 && lng != 0) {
                map.value.center = mcenter.value.position;

                if(map_ref.value != null && map_ref.value.center != null) {
                    map_ref.value.map.setCenter(map_ref.value.map.center);
                    cir_ref.value.circle.component.value.setCenter(mcenter.value.position);
                }
            }

            updateLatLng = updateLocation;

            if(mile != 0) {
                radius.value = mile;
                
            }

            psmodal.value.toggle(true);

            
        }

        function rangeChanged() {
            cir_ref.value.circle.component.value.setRadius(radius.value * m_to_mi);
        }

        // Radius * 2 = meters
        const circleCenter = ({
            editable : false,
            center: mcenter.value.position,
            radius: radius.value * m_to_mi,
            strokeColor: '#FF0000',
            strokeOpacity: 0.8,
            strokeWeight: 2,            
            draggable: true,
            crossOnDrag: false
        })

        function dragend(event) {
           
            lat.value = event.latLng.lat();
            lng.value = event.latLng.lng();
        }

        function radius_changed() {
            if(cir_ref.value != null) {
                PsUtils.log(cir_ref.value.circle.component.value.getRadius());
                PsUtils.log(cir_ref.value.circle.component.value.getCenter().lat() + " <> " + cir_ref.value.circle.component.value.getCenter().lng());
            }
        
        }
        
        return {
            psmodal,
            updateCoordinates,
            mcenter,
            map,
            openModal,
            map_ref,
            pickedLocation,
            cir_ref,
            circleCenter,
            radius_changed,
            dragend,
            radius,
            rangeChanged
         }
    },
})
</script>
