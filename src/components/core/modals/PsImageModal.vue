
<style scoped>
.vue-neat-modal {
    max-height: 95%;
   
}
</style> 


<template>
    <Modal
        v-model="isOpen"
        :fullscreen="isFullscreen"
        :modal-transition="modalTransition"
        :click-out="isClickOut"
        :disable-motion="isMotionDisabled"
        :max-width="maxWidth"
        :remove-backdrop="isBackdropRemoved"
        class="mx-auto"
        @after-leave="activeModal('false')"   
        @after-enter="activeModal('true')"         
    >            
        <div class=" w-screem" >
            <slot name="body"  />
        </div>                
    </Modal>
</template>

<script lang='ts'>
import { Modal } from "vue-neat-modal";
import 'vue-neat-modal/dist/vue-neat-modal.css'
import { ref} from 'vue';
import { PsValueProvider } from '@/store/modules/core/PsValueProvider';
export default {
    name : 'PsImageModal',
    components : {
        Modal,
    },
    props : {       
        maxWidth : {
            type : String,
            default : "100%"
        },
        isBackdropRemoved : {
            type : Boolean,
            default : false
        },
        isMotionDisabled : {
            type : Boolean,
            default : false
        }, 
        isClickOut : {
            type : Boolean,
            default : true
        }, 
        modalTransition : {
            type : String,
            default : "scale"
        }, 
        isFullscreen : {
            type : Boolean,
            default : false
        }
    },
    setup() {
        const isOpen = ref(false);
        const psValueHolder = PsValueProvider.psValueHolder;
        
        function toggle(status) {
            isOpen.value = status;
        }
        function activeModal(value){
            psValueHolder.replacemodal(value)
        }
       
        return {
            isOpen,
            toggle,
            activeModal
        }
    }
}
</script>