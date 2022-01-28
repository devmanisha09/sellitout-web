<template>
       <ps-modal ref="psmodal" line="hidden" maxWidth="480px" :isClickOut='false' class='h-full  ' bodyHeight="max-h-64" theme="p-6 border lg:rounded-2xl rounded-xl "> 
        <template #title>
             <!-- Item entry title -->
            <div class="ms-8 flex flex-row justify-between">
                <div class="flex flex-row space-x-2 ">
                    <ps-label class="font-medium text-xl lg:text-3xl"> {{ $t('promote_item_modal__promote') }} </ps-label>
                    <ps-label class="font-light text-sm lg:text-xl lg:mt-2.5 mt-1.5"> {{ $t('promote_item_modal__item_promotion') }} </ps-label>
                </div>
                <font-awesome-icon @click="psmodal.toggle(false)" :icon="['fas', 'times']" class="text-secondary-500 dark:text-secondaryDark-white" size="2x" />
            </div>
        </template>
        <template #body>      
            <!-- End Item entry title -->
            <!-- Start Input Field for md .. -->
            <div class="flex flex-col lg:mt-4 mt-3 px-8">
                <!-- Start Left Screen -->
                <div class="">
                    <div class="flex flex-col w-full">
                    
                        <!-- for Ads Start Time -->
                        <ps-label class="font-medium text-sm lg:text-base mb-2"> {{ $t('promote_item_modal__ads_start_date') }}  </ps-label>
                        <div class="flex">
                            <div class="">
                                <ps-date-picker ref="startDate" class='z-50' :pickedDateProps="pickedDate"/>
                            </div>
                            <ps-time-picker v-model:hour="startTimeH"  v-model:min="startTimeM" v-model:ampm="startTimeAmpm"/>
                        </div>                        
                        <!-- end Ads Start Time -->
                    
                        <ps-label class="font-medium lg:mt-4 mt-3 text-sm lg:text-base "> {{ $t('promote_item_modal__choose_package') }}  </ps-label>
                        <div class="flex flex-col w-full " id="r1">
                            <ps-radio-1 v-for=" selectData in promotionSetList" 
                            :key="selectData.id"  
                            :id="selectData.id"                                                                                   
                            :value="selectData" 
                            v-model:selectedValue="selectedPromotePlan"
                            class=" mt-3">

                              <template #title >
                                  <div v-if='selectData.type == 1'>                                      
                                        <ps-label class='ms-0.5 font-light text-xs lg:text-sm'>{{selectData.days}} {{ $t('promote_item_modal__days') }}, {{ $t('promote_item_modal__promotion') }}</ps-label>
                                  </div>
                                  <div v-else-if='selectData.type == 2'>
                                        <div class='flex flex-row'>
                                            <ps-input class="w-24" readonly v-if="selectedPromotePlan.id != '5' "  v-model:value="customPromoDate" />
                                            <ps-input class="w-24" v-else  v-model:value="customPromoDate" />
                                            <ps-label class='mt-3 ms-2 font-light text-xs lg:text-sm'>$ {{ $t('promote_item_modal__days') }}, {{ $t('promote_item_modal__promotion') }} </ps-label> 
                                        </div>                                    
                                  </div>
                              </template>

                              <template #price>
                                    <div v-if='selectData.type == 1'>
                                        <ps-label class='font-light text-xs lg:text-sm'>$ {{ selectData.days * pricePerDay}}</ps-label>
                                    </div>
                                    <div v-else-if='selectData.type == 2'>
                                        <ps-label class=' font-light text-xs lg:text-sm'>$ {{ customPromoDate * pricePerDay}}</ps-label>
                                    </div>                                
                              </template>
                            </ps-radio-1>

                        </div>
                        
                        <!-- end Ads days -->
                     </div>   
                </div>
                <!-- End Left Screen -->

            </div>
            <!-- End Input Field -->
          
        </template>
        <template #footer>    
            <ps-label class="ms-8 font-medium text-sm lg:text-base mb-2"> {{ $t('promote_item_modal__pay_with') }}  </ps-label>         
            <div class="px-8 flex flex-row justify-between">
                <ps-button class=" w-24 py-3" @click="paypalClicked" >{{ $t('promote_item_modal__pay_with_paypal') }}</ps-button>
                <ps-button class=" w-24 py-3" @click="stripeClicked" >{{ $t('promote_item_modal__pay_with_stripe') }}</ps-button>
                <ps-button class=" w-24 py-3" @click="razorClicked" >{{ $t('promote_item_modal__pay_with_razor') }}</ps-button>                               
            </div>
            <div class="px-8 mt-2 flex flex-row justify-between">
                <ps-button class=" w-24 py-3 " @click="paystackClicked" >{{ $t('promote_item_modal__pay_with_stack') }}</ps-button>
                <ps-button class=" w-24 py-3 " @click="offlineClicked" >{{ $t('promote_item_modal__pay_with_offline') }}</ps-button>
                <span class=" w-24 py-3"></span>            
            </div>
        </template>
    </ps-modal>
    <stripe-credit-card-modal ref="stripe_credit_card_modal" />

    <paypal-credit-card-modal ref="paypal_credit_card_modal" />

    <offline-payment-modal ref="offline_payment_modal" />
    
    <ps-error-dialog ref="ps_error_dialog" />


</template>

<script lang='ts'> 

// Libs
import {defineComponent, reactive, ref } from 'vue';
import PsUtils from '@/utils/PsUtils';

// Compone
import PsModal from '@/components/core/modals/PsModal.vue';
import PsLabel from '@/components/core/label/PsLabel.vue';
import PsButton from '@/components/core/buttons/PsButton.vue';
import PsTimePicker from '@/components/core/picker/PsTimePicker.vue';
import PsDatePicker from '@/components/core/picker/PsDatePicker.vue';
import PsErrorDialog from '@/components/core/dialog/PsErrorDialog.vue';
import PsRadio1 from '@/components/core/radio/PsRadio1.vue';
import PsInput from '@/components/core/input/PsInput.vue';
import StripeCreditCardModal from '@/components/modules/credit/StripeCreditCardModal.vue';
import PaypalCreditCardModal from '@/components/modules/credit/PaypalCreditCardModal.vue';
import OfflinePaymentModal from '@/components/modules/credit/OfflinePaymentModal.vue';

// Providers
import { usePsAppInfoProviderState } from '@/store/modules/appinfo/AppInfoProvider';
import { PsValueProvider } from '@/store/modules/core/PsValueProvider';
import { createUserProviderState } from "@/store/modules/user/UserProvider";
import AppInfoParameterHolder from '@/object/holder/AppInfoParameterHolder';
import ItemPaidHistoryParameterHolder from '@/object/holder/ItemPaidHistoryParameterHolder';
import { createItemPromotionProviderState } from '@/store/modules/promotion/ItemPromotionProvider';

import PsStatus from '@/api/common/PsStatus';
import PsConfig from '@/config/PsConfig';
import { i18n } from '@/assets/locales/index';
import PsConst from '@/object/constant/ps_constants';

import PaystackPop from '@paystack/inline-js';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
library.add(faTimes)
export default defineComponent({
    name: "PromoteItemModal",
    components: {
        PsModal,
        PsLabel,
        PsButton,
        PsTimePicker,
        PsDatePicker,
        PsErrorDialog,
        PsRadio1,
        PsInput,
        StripeCreditCardModal,
        PaypalCreditCardModal,
        OfflinePaymentModal
    },
   setup() {
        const psmodal = ref();
        const stripe_credit_card_modal = ref();
        const paypal_credit_card_modal = ref();
        const offline_payment_modal = ref();
        const startDate = ref();
        const startTimeH = ref('0');
        const startTimeM = ref('0');
        const startTimeAmpm = ref('1');
        const pickedDate = ref(new Date());
        const ps_error_dialog = ref();
        const customPromoDate = ref(1);
        let promoteitemId = '';

        // Init Provider
        const appInfoProvider = usePsAppInfoProviderState();
        const appInfoParameterHolder = new AppInfoParameterHolder();
        const userProvider = createUserProviderState();
        const promoteParameterHolder = new ItemPaidHistoryParameterHolder();
        const provider = createItemPromotionProviderState();
        const loginUserId = PsValueProvider.psValueHolder.getLoginUserId();
        appInfoParameterHolder.userId = loginUserId;
      
        const radioSelectedList = reactive({id:2, name:"Apple"});
        
        // Price Per Day
        const pricePerDay = ref(0);
        const razorKey = ref('');

        const promotionSetList = reactive(PsConfig.promotionDays);
        const selected = JSON.parse(JSON.stringify(PsConfig.promotionDays[0]));
        const selectedPromotePlan = reactive(selected);
     
        async function openModal(itemIdStr) { 

            promoteitemId = itemIdStr;
            psmodal.value.toggle(true);
            await loadUserData();
                        
        }
       

        async function loadUserData() {
            const info = await appInfoProvider.loadDeleteHistory(appInfoParameterHolder);
          
            razorKey.value = info.data.razorKey;
            if(info.status == PsStatus.SUCCESS) {
                pricePerDay.value = parseInt(info.data.oneDay, 10);
            }else {
                pricePerDay.value = 0;
            }
        }

        function stripeClicked() {
            const day = parseInt(startDate.value.pickedDate.getDate(), 10);
            const month = parseInt(startDate.value.pickedDate.getMonth(), 10) ;
            const year = parseInt(startDate.value.pickedDate.getFullYear(), 10);
            let h = parseInt('');
            let m = parseInt(startTimeM.value, 10);
            let s = 0;
            if(startTimeAmpm.value == '1') {
                h = parseInt(startTimeH.value, 10);
            } else {
                h = parseInt(startTimeH.value, 10) + 12;
            }

            const selectedDate = new Date(year, month, day, h, m, s ).getTime();
            const currentDate = new Date().getTime();
        
            if(selectedDate < currentDate) {
                ps_error_dialog.value.openModal('', 
                i18n.global.t('promote_item_modal__date_invalid_error'));
            }else {
                let amountStr = '';
                let daysStr = '';
                const startDateTimeStr = PsUtils.timeStampToDateString(selectedDate);
                const startDateTimestampStr = PsUtils.getTimeStampDividedByOneThousand(selectedDate);
                if(selectedPromotePlan.type == 1) {
                    amountStr = ( selectedPromotePlan.days * pricePerDay.value ).toString();
                    daysStr = selectedPromotePlan.days.toString();
                    
                } else {
                    amountStr = ( customPromoDate.value * pricePerDay.value ).toString();
                    daysStr = customPromoDate.value.toString();
             
                }
              
                psmodal.value.toggle(false);
                
                stripe_credit_card_modal.value.openModal(
                    promoteitemId,
                    amountStr,
                    daysStr,
                    startDateTimeStr,
                    startDateTimestampStr
                );
            }
        }
      
        function paypalClicked() {
            const day = parseInt(startDate.value.pickedDate.getDate(), 10);
            const month = parseInt(startDate.value.pickedDate.getMonth(), 10) ;
            const year = parseInt(startDate.value.pickedDate.getFullYear(), 10);
            let h = parseInt('');
            const m = parseInt(startTimeM.value, 10);
            const s = 0;
            if(startTimeAmpm.value == '1') {
                h = parseInt(startTimeH.value, 10);
            } else {
                h = parseInt(startTimeH.value, 10) + 12;
            }

            const selectedDate = new Date(year, month, day, h, m, s ).getTime();
            const currentDate = new Date().getTime();
        
            if(selectedDate < currentDate) {
                ps_error_dialog.value.openModal('', 
                i18n.global.t('promote_item_modal__date_invalid_error'));
            }else {
                let amountStr = '';
                let daysStr = '';
                const startDateTimeStr = PsUtils.timeStampToDateString(selectedDate);
                const startDateTimestampStr = PsUtils.getTimeStampDividedByOneThousand(selectedDate);
                if(selectedPromotePlan.type == 1) {
                    amountStr = ( selectedPromotePlan.days * pricePerDay.value).toString();
                    daysStr = selectedPromotePlan.days.toString();
                } else {
                    amountStr = ( customPromoDate.value * pricePerDay.value).toString();
                    daysStr = customPromoDate.value.toString();
                }

                psmodal.value.toggle(false);
                
                paypal_credit_card_modal.value.openModal(
                    promoteitemId,
                    amountStr,
                    daysStr,
                    startDateTimeStr,
                    startDateTimestampStr
                );        
            }
        }

        async function razorClicked() {
            const day = parseInt(startDate.value.pickedDate.getDate(), 10);
            const month = parseInt(startDate.value.pickedDate.getMonth(), 10) ;
            const year = parseInt(startDate.value.pickedDate.getFullYear(), 10);
            let h = parseInt('');
            let m = parseInt(startTimeM.value, 10);
            let s = 0;
            if(startTimeAmpm.value == '1') {
                h = parseInt(startTimeH.value, 10);
            } else {
                h = parseInt(startTimeH.value, 10) + 12;
            }

            const selectedDate = new Date(year, month, day, h, m, s ).getTime();
            const currentDate = new Date().getTime();
        
            if(selectedDate < currentDate) {
                ps_error_dialog.value.openModal('', 
                i18n.global.t('promote_item_modal__date_invalid_error'));
            }else {
                
                promoteParameterHolder.startDate = PsUtils.timeStampToDateString(selectedDate);
                promoteParameterHolder.startTimeStamp = PsUtils.getTimeStampDividedByOneThousand(selectedDate).toString();
                if(selectedPromotePlan.type == 1) {
                    promoteParameterHolder.amount = (selectedPromotePlan.days * pricePerDay.value).toString();
                    promoteParameterHolder.howManyDay = selectedPromotePlan.days.toString();
                } else {
                    promoteParameterHolder.amount = (customPromoDate.value * pricePerDay.value).toString();
                    promoteParameterHolder.howManyDay = customPromoDate.value.toString();
                }
                const returnData = await userProvider.getUser(loginUserId);
                const userInfo = returnData.data[0];
                //for razor ui
                const options = 
                {
                    "key": razorKey.value, // Enter the Key ID generated from the Dashboard 
                    "name": "Test Company", 
                    "prefill": {
                        "name": userInfo.userName,
                        "email": userInfo.userEmail,
                        "contact": userInfo.userPhone
                    },
                    "theme": {
                        "color": "#0e9f6e"
                    },
                    // This handler function will handle the success payment
                    "handler": async function (response) {
                        // Submit response.razorpay_payment_id to your server
                        promoteParameterHolder.itemId = promoteitemId;
                        promoteParameterHolder.paymentMethod = PsConst.PAYMENT_RAZOR_METHOD.toString();
                        promoteParameterHolder.paymentMethodNounce = response.razorpay_payment_id;
                     
                        const paiditem = await provider.postItemPromotion(promoteParameterHolder);
                        psmodal.value.toggle(false);
                        if(paiditem.status == PsStatus.ERROR) {
                            ps_error_dialog.value.openModal('', provider.paiditem.message);
                        } else {
                            location.reload();
                        }
                    },
                };
                const rzp1 = new (window as any).Razorpay(options);
                rzp1.open();
                rzp1.on('payment.failed', function (response)
                {            
                    alert(response.error);     
                });
            }
           
        }

        async function paystackClicked() {
            const day = parseInt(startDate.value.pickedDate.getDate(), 10);
            const month = parseInt(startDate.value.pickedDate.getMonth(), 10) ;
            const year = parseInt(startDate.value.pickedDate.getFullYear(), 10);
            let h = parseInt('');
            const m = parseInt(startTimeM.value, 10);
            const s = 0;
            if(startTimeAmpm.value == '1') {
                h = parseInt(startTimeH.value, 10);
            } else {
                h = parseInt(startTimeH.value, 10) + 12;
            }

            const selectedDate = new Date(year, month, day, h, m, s ).getTime();
            const currentDate = new Date().getTime();
        
            if(selectedDate < currentDate) {
                ps_error_dialog.value.openModal('', 
                i18n.global.t('promote_item_modal__date_invalid_error'));
            }else {
                promoteParameterHolder.startDate = PsUtils.timeStampToDateString(selectedDate);
                promoteParameterHolder.startTimeStamp = PsUtils.getTimeStampDividedByOneThousand(selectedDate).toString();
                if(selectedPromotePlan.type == 1) {
                    promoteParameterHolder.amount = (selectedPromotePlan.days * pricePerDay.value).toString();
                    promoteParameterHolder.howManyDay = selectedPromotePlan.days.toString();
                } else {
                    promoteParameterHolder.amount = (customPromoDate.value * pricePerDay.value).toString();
                    promoteParameterHolder.howManyDay = customPromoDate.value.toString();
                }
               
                appInfoProvider.loadDeleteHistory(appInfoParameterHolder);
                const returnData = await userProvider.getUser(loginUserId);
                const userInfo = returnData.data[0];
                const paystack = PaystackPop.setup({
                    key: appInfoProvider?.appInfo?.data.payStackKey,
                    email: userInfo.userEmail,
                    amount: promoteParameterHolder.amount,
                    callback: async function(response){
                        PsUtils.log(response);
                        // Payment complete! Reference: ' + response.reference;
                        promoteParameterHolder.itemId = promoteitemId;
                        promoteParameterHolder.paymentMethod = PsConst.PAYMENT_PAY_STACK_METHOD.toString();
                       
                        const paiditem = await provider.postItemPromotion(promoteParameterHolder);
                        psmodal.value.toggle(false);
                        if(paiditem.status == PsStatus.ERROR) {
                            ps_error_dialog.value.openModal('', provider.paiditem.message);
                        } else {
                            location.reload();
                        }
                    },
                    onClose: function(){
                        alert("close");
                        // user closed popup
                    }

                });
                paystack.openIframe();
            }
        }

        function offlineClicked() {
            const day = parseInt(startDate.value.pickedDate.getDate(), 10);
            const month = parseInt(startDate.value.pickedDate.getMonth(), 10) ;
            const year = parseInt(startDate.value.pickedDate.getFullYear(), 10);
            let h = parseInt('');
            const m = parseInt(startTimeM.value, 10);
            const s = 0;
            if(startTimeAmpm.value == '1') {
                h = parseInt(startTimeH.value, 10);
            } else {
                h = parseInt(startTimeH.value, 10) + 12;
            }

            const selectedDate = new Date(year, month, day, h, m, s ).getTime();
            const currentDate = new Date().getTime();
        
            if(selectedDate < currentDate) {
                ps_error_dialog.value.openModal('', 
                i18n.global.t('promote_item_modal__date_invalid_error'));
            }else {
                let amountStr = '';
                let daysStr = '';
                const startDateTimeStr = PsUtils.timeStampToDateString(selectedDate);
                const startDateTimestampStr = PsUtils.getTimeStampDividedByOneThousand(selectedDate).toString();
                if(selectedPromotePlan.type == 1) {
                    amountStr = (selectedPromotePlan.days * pricePerDay.value).toString();
                    daysStr = selectedPromotePlan.days.toString();
                } else {
                    amountStr = ( customPromoDate.value * pricePerDay.value ).toString();
                    daysStr = customPromoDate.value.toString();
                }

                psmodal.value.toggle(false);
                
                offline_payment_modal.value.openModal(
                    promoteitemId,
                    amountStr,
                    daysStr,
                    startDateTimeStr,
                    startDateTimestampStr
                );
 
            }
        }

        return {
            psmodal,
            openModal,
            startDate,
            startTimeH,
            startTimeM,
            startTimeAmpm,
            pickedDate,
            stripeClicked,
            paypalClicked,
            ps_error_dialog,
            promotionSetList,
            radioSelectedList,
            customPromoDate,
            pricePerDay,
            selectedPromotePlan,
            stripe_credit_card_modal,
            paypal_credit_card_modal,
            offline_payment_modal,
            razorClicked,
            paystackClicked,
            offlineClicked
        }
    },
})
</script>
