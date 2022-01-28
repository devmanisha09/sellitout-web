<template>
    <ps-modal ref="psmodal"  :isClickOut='false' line="hidden"> 
        <template #title>
             <!-- Item entry title -->
            <div class=" items-center">
                <ps-label-header-6 > {{offlineProvider.offlinePayment.data?.message}} </ps-label-header-6>
            </div>
        </template>

        <template #body>           
            <!-- End Item entry title -->
            <!-- Start Input Field for md .. -->
            <div class="flex justify-between container w-full p-4">
                <!-- Start Left Screen -->
                <div class="md:w-full h-auto bg-background dark:bg-backgroundDark rounded-md  pt-2">
                    <div v-for="offline in offlineProvider.offlinePayment.data.offlinePayment" :key="offline.id">
                        <!-- bank -->
                        <div class="flex flex-auto px-4 py-10">
                            <div>
                                <img alt="Placeholder" width="300px" height="300px" class="w-18 mx-auto h-18" :src="offlineProvider.imageUrl(offline ? offline.defaultIcon.imgPath : '') " @error="offlineProvider.defaultCarImage">
                            </div>
                            <div class="flex flex-col ml-4">
                                <ps-label-title-3> {{offline ? offline.title : ''}} </ps-label-title-3>
                                <ps-label> {{offline ? offline.description : ''}} </ps-label>
                            </div>
                        </div>  
                    </div> 
                 
                </div>
                <!-- End Left Screen -->
            </div>
            <!-- End Input Field -->
        </template>

        <template #footer>             
            <div class="flex items-center justify-center mb-4">
                <ps-button class="text-center w-60 mx-auto  " @click="submitClicked" > {{ $t('offline_payment_modal__pay_offline') }} </ps-button>
                <ps-button class="text-center w-60 mx-auto ms-4" theme="btn-second" @click="psmodal.toggle(false)" >  {{ $t('stripe_credit_card_modal__cancel') }} </ps-button>                
            </div>
        </template>
        
    </ps-modal>
    
    <ps-loading-dialog ref="psloading"  :isClickOut='false'/> 

    <ps-error-dialog ref="ps_error_dialog" />

    <ps-success-dialog ref="ps_success_dialog" />
</template>

<script lang='ts'>
import { defineComponent,ref } from 'vue';
import PsModal from '@/components/core/modals/PsModal.vue';
import PsLabel from '@/components/core/label/PsLabel.vue';
import PsLabelTitle3 from '@/components/core/label/PsLabelTitle3.vue';
import PsLabelHeader6 from '@/components/core/label/PsLabelHeader6.vue';
import PsButton from '@/components/core/buttons/PsButton.vue';
import PsLoadingDialog from '@/components/core/dialog/PsLoadingDialog.vue';
import PsErrorDialog from '@/components/core/dialog/PsErrorDialog.vue';
import PsSuccessDialog from '@/components/core/dialog/PsSuccessDialog.vue';
import ItemPaidHistoryParameterHolder from '@/object/holder/ItemPaidHistoryParameterHolder';
import { createItemPromotionProviderState } from '@/store/modules/promotion/ItemPromotionProvider';
import { createOfflinePaymentProviderState } from '@/store/modules/offlinePayment/OfflinePaymentProvider';
import PsConst from '@/object/constant/ps_constants';
import PsStatus from '@/api/common/PsStatus';

export default defineComponent({
    name : 'OfflinePaymentModal',
    components : {
        PsModal,
        PsLabel,
        PsButton,
        PsLabelTitle3,
        PsLoadingDialog,
        PsErrorDialog,
        PsSuccessDialog,
        PsLabelHeader6
    },
    setup() {
        
        
        const psmodal = ref();    
        const psloading = ref();  
        const provider = createItemPromotionProviderState();
        const promoteParameterHolder = new ItemPaidHistoryParameterHolder();
        const offlineProvider = createOfflinePaymentProviderState();
        
        const date_text_field_controller = ref();
        const ps_error_dialog = ref();
        const ps_success_dialog = ref();
        
        let itemId = '';
        let amount = '';
        let startDateTime = '';
        let startDateTimestamp = '';
        let days = '';
        
        async function openModal(promoteitemId,amountStr,daysStr,startDateTimeStr,startDateTimestampStr) { 
            await offlineProvider.loadOfflinePaymentMethodList();
            itemId = promoteitemId;
            amount = amountStr;
            days = daysStr;
            startDateTime = startDateTimeStr;
            startDateTimestamp = startDateTimestampStr;

            psmodal.value.toggle(true);
            
        }

        async function submitClicked() {
       
            psloading.value.openModal();

            promoteParameterHolder.itemId = itemId;
            promoteParameterHolder.amount = amount;
            promoteParameterHolder.startDate = startDateTime;
            promoteParameterHolder.howManyDay = days;
            promoteParameterHolder.paymentMethod = PsConst.PAYMENT_OFFLINE_METHOD.toString();
            promoteParameterHolder.startTimeStamp = startDateTimestamp;
         
            const paiditem = await provider.postItemPromotion(promoteParameterHolder);
            psloading.value.closeModal();

            psmodal.value.toggle(false);
            if(paiditem.status == PsStatus.ERROR) {
                ps_error_dialog.value.openModal('', provider.paiditem.message);
            } else {
                location.reload();
            }
            
        }

        return {
            psmodal,
            psloading,
            openModal,
            date_text_field_controller,
            ps_error_dialog,
            submitClicked,
            ps_success_dialog,
            offlineProvider
        }
    },
})
</script>