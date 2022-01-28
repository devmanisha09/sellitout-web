<template>
    <ps-image-modal ref="psmodal" :isClickOut='true' class="z-50 content-center mx-auto" > 
        <template #body>
            <div class="w-screem flex flex-row justify-between">
               
                <div class="flex flex-grow max-w-10/12">
                    <img alt="Placeholder" width="400px" height="400px" class="w-full h-112 overflow:hidden object-contain" 
                    :src="chatHistoryProvider.imageUrl(gallery)"
                    @error="chatHistoryProvider.defaultCarImage" >
                </div>
            </div>
        </template>
        
    </ps-image-modal>
</template>

<script lang='ts'>
import { defineComponent,ref } from 'vue';
import PsImageModal from '@/components/core/modals/PsImageModal.vue';
import { createGetChatHistoryProviderState } from '@/store/modules/chat/GetChatHistoryProvider'

export default defineComponent({
    name: "ChatImageDetail",
    components : {
        PsImageModal
    },
    setup() {
        const psmodal = ref();
        let gallery = ref('');
        const chatHistoryProvider = createGetChatHistoryProviderState();
        
        function openModal(galleryParam ) {
            gallery.value = galleryParam;           
            psmodal.value.toggle(true);           
        }

        function closeModal() {
            psmodal.value.toggle(false);
        }
        return {
            psmodal,
            openModal,
            closeModal,
            gallery,
            chatHistoryProvider,

        }
    },
})
</script>