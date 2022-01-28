<template>
    <ps-modal ref="psmodal"  :isClickOut='false' > 
        <template #title>
            
             <!-- Item entry title -->
            <div class="flex flex-col items-center mt-8">
                <ps-label-header-4 class="font-bold"> {{ $t('stripe_credit_card_modal__card_entry') }} </ps-label-header-4>
            </div>
        </template>
        <template #body> 
            <StripeElement :element="cardElement" @change="event = $event" />
        </template>
        <template #footer>  
            <div class="flex items-center justify-center mb-4">
                <ps-button class="text-center w-60 mx-auto  " @click="registerCard">{{ $t('stripe_credit_card_modal__save') }}</ps-button>
                <ps-button class="text-center w-60 mx-auto ms-4" theme="btn-second" @click="psmodal.toggle(false)" >  {{ $t('stripe_credit_card_modal__cancel') }} </ps-button>
            </div>
        </template>
        <div v-if="event && event.error">{{ event.error.message }}</div>
    </ps-modal>

    <ps-loading-dialog ref="psloading"  :isClickOut='false'/> 

    <ps-error-dialog ref="ps_error_dialog" />

</template>
<script lang='ts'>
import { defineComponent, ref } from 'vue';
import { useStripe, StripeElement } from 'vue-use-stripe';
import '@stripe/stripe-js';
import PsConst from '@/object/constant/ps_constants';
import PsModal from '@/components/core/modals/PsModal.vue';
import PsLabelHeader4 from '@/components/core/label/PsLabelHeader4.vue';
import PsErrorDialog from '@/components/core/dialog/PsErrorDialog.vue';
import PsButton from '@/components/core/buttons/PsButton.vue';
import PsLoadingDialog from '@/components/core/dialog/PsLoadingDialog.vue';
import ItemPaidHistoryParameterHolder from '@/object/holder/ItemPaidHistoryParameterHolder';
import { createItemPromotionProviderState } from '@/store/modules/promotion/ItemPromotionProvider';
import { PsValueProvider } from '@/store/modules/core/PsValueProvider';
import PsStatus from '@/api/common/PsStatus';

export default defineComponent({
    components: { 
        StripeElement,
        PsModal,
        PsLabelHeader4,
        PsButton,
        PsLoadingDialog,
        PsErrorDialog
    },
    setup() {
        const psmodal = ref(); 
        const psloading = ref();
        const ps_error_dialog = ref();
        const promoteParameterHolder = new ItemPaidHistoryParameterHolder();
        const provider = createItemPromotionProviderState();
        let itemId = '';
        let amount = '';
        let startDateTime = '';
        let startDateTimestamp = '';
        let days = '';

        async function openModal(promoteitemId,amountStr,daysStr,startDateTimeStr,startDateTimestampStr) { 
            itemId = promoteitemId;
            amount = amountStr;
            days = daysStr;
            startDateTime = startDateTimeStr;
            startDateTimestamp = startDateTimestampStr;

            psmodal.value.toggle(true);
        }
        //for stripe payment
        const event = ref();
        const stripe_publisbed_key = PsValueProvider.psValueHolder.publishKey;
        const {
        stripe,
        elements: [cardElement],
        } = useStripe({
        key: stripe_publisbed_key || '',
        elements: [{ type: 'card', options: {} }],
        });
   
        const registerCard = () => {
            if (event.value != null &&
                event.value?.complete != null &&
                event.value?.complete!) {
                stripe.value?.elements().create('card');
            
                stripe.value?.createToken(cardElement.value).then(function(result) {
                    // Handle result.error or result.token
                    submitClicked(result.token?.id)
                });
                
            }
        }

        async function submitClicked(token) {
            
            psloading.value.openModal();

            promoteParameterHolder.itemId = itemId;
            promoteParameterHolder.amount = amount;
            promoteParameterHolder.startDate = startDateTime;
            promoteParameterHolder.howManyDay = days;
            promoteParameterHolder.paymentMethod = PsConst.PAYMENT_STRIPE_METHOD.toString();
            promoteParameterHolder.paymentMethodNounce = token;
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
            openModal,
            event,
            cardElement,
            registerCard,
            psloading,
            ps_error_dialog
        }
    },
})
</script>
