<template>
    
    <ps-modal ref="psmodal"  line="hidden"  :isClickOut='false' > 
        <template #body> 
            <div id="dropin-container"></div>
            <div class="flex justify-center mx-auto">
                <ps-button theme="btn-second" class="text-center mx-4" @click="psmodal.toggle(false)" > {{ $t('paypal_credit_card_modal__close') }} </ps-button>
            </div>
        </template>
    </ps-modal>
    <ps-loading-dialog ref="psloading"  :isClickOut='false'/> 

    <ps-error-dialog ref="ps_error_dialog" />
</template>

<script lang='ts'>
import { defineComponent, ref} from 'vue';

import PsModal from '@/components/core/modals/PsModal.vue';
import PsButton from '@/components/core/buttons/PsButton.vue';

import ItemPaidHistoryParameterHolder from '@/object/holder/ItemPaidHistoryParameterHolder';
import { createTokenProviderState } from '@/store/modules/token/TokenProvider';
import { createItemPromotionProviderState } from '@/store/modules/promotion/ItemPromotionProvider';

import PsErrorDialog from '@/components/core/dialog/PsErrorDialog.vue';
import { i18n } from '@/assets/locales/index';
import PsConst from '@/object/constant/ps_constants';
import PsStatus from '@/api/common/PsStatus';

export default defineComponent({
    name : 'PaypalCreditCardModal',
    components : {
        PsModal,
        PsButton,
        PsErrorDialog,
    },
    setup() {
        const psmodal = ref(); 
        const ps_error_dialog = ref();

        let itemId = '';
        let amount = '';
        let startDateTime = '';
        let startDateTimestamp = '';
        let days = '';
        const tokenProvider = createTokenProviderState();
        const provider = createItemPromotionProviderState();

        const promoteParameterHolder = new ItemPaidHistoryParameterHolder();

        async function openModal(promoteitemId,amountStr,daysStr,startDateTimeStr,startDateTimestampStr) { 
            itemId = promoteitemId;
            amount = amountStr;
            days = daysStr;
            startDateTime = startDateTimeStr;
            startDateTimestamp = startDateTimestampStr;

            psmodal.value.toggle(true);
            //for braintree paypal dropin 
            const returnData = await tokenProvider.loadToken();
            const button = document.querySelector('#submit-button');
            const dropin = require('braintree-web-drop-in');
          
            dropin.create({
            authorization: returnData.data.message,
            container: '#dropin-container',
            paypal: {
                flow: 'vault',
            }
            }, function (createErr, instance) {
                button?.addEventListener('click', function () {
                    if (instance.isPaymentMethodRequestable()) {
                        setTimeout(function() {
                            instance.requestPaymentMethod(async function (err, payload) {
                                if(err) {
                                    ps_error_dialog.value.openModal('', 
                                    i18n.global.t('paypal_credit_card_modal__error_paid_ad'));
                                    return;
                                }
                                // Submit payload.nonce to your server
                                promoteParameterHolder.itemId = itemId;
                                promoteParameterHolder.amount = amount;
                                promoteParameterHolder.startDate = startDateTime;
                                promoteParameterHolder.howManyDay = days;
                                promoteParameterHolder.paymentMethod = PsConst.PAYMENT_PAYPAL_METHOD.toString();
                                promoteParameterHolder.paymentMethodNounce = payload.nonce;
                                promoteParameterHolder.startTimeStamp = startDateTimestamp;
                              
                                const paiditem = await provider.postItemPromotion(promoteParameterHolder);

                                if(paiditem.status == PsStatus.ERROR) {
                                    ps_error_dialog.value.openModal('', provider.paiditem.message);
                                } else {
                                    location.reload();
                                }

                            });
                        }, 200);
                    }
                  
                });
            });
        }

        return {
            psmodal,
            openModal,
            ps_error_dialog
        }
    },
})
</script>