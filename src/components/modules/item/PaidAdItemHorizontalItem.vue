<template>

    <div class="cursor-pointer sm:w-full md:w-full" v-on:click="onClick != null ? onClick(paiditem) : null">
        <!-- Pscard -->    
        <ps-card class="flex flex-col my-2 " :enabledHover="true">
            
            <div v-if="psValueHolder.showProfile == 'show'" class="flex items-center justify-between leading-none lg:px-2 px-1 py-1 bg-primary-000 dark:bg-primaryDark-black rounded-t-xl lg:rounded-t-2xl">
                <div class="flex flex-row items-center no-underline text-black">
                    <div class="">
                        <img alt="Placeholder" width="15px" height="10px" class="rounded-full bg-transparent lg:w-8 lg:h-8 w-6 h-6 flex items-center justify-center object-cover" :src="itempaidProvider.imageUrl(paiditem ? paiditem.item.user.userProfilePhoto : '')" @error="itempaidProvider.defaultProfileImage" >
                    </div>
                    <p class="ms-2 mt-1 text-sm flex-grow">
                        <span class="flex">
                            <ps-label class="truncate lg:text-sm text-xs font-medium"  > {{paiditem ? paiditem.item.user.userName : ''}} </ps-label>
                            <img alt="Placeholder" class="mx-1 w-4 h-4 object-fill" width="15" height="10" src="@/assets/images/mark2.png" v-if="paiditem && paiditem.item.user.isVerifybluemark == '1'">
                        </span>
                        <ps-label class=" font-medium text-xxs lg:text-xs " textColor="text-secondary-400 dark:text-secondaryDark-grey"  > {{ paiditem ? paiditem.addedDateStr : '' }}  </ps-label>
                    </p>
                </div>
            </div> 
            <div class="lg:px-2 lg:py-2 px-1 py-1 bg-primary-000 dark:bg-primaryDark-black" :class="psValueHolder.showProfile == 'show' ? 'rounded-b-xl lg:rounded-b-2xl pt-0' : 'rounded-xl lg:rounded-2xl'">
                <div class="relative lg:h-56 h-36 ">
                    <div class="relative lg:h-56 h-36 ">
                        <div class="absolute ">
                            <img alt="Placeholder" class="rounded-lg block object-cover w-screen lg:h-56 h-36 " width="640px" height="360px" v-lazy="itempaidProvider.imageUrl(paiditem ? paiditem.item.defaultPhoto.imgPath : '') " @error="itempaidProvider.defaultCarImage">                    
                        </div>
                        <div class="relative lg:pt-48 pt-28 ">  
                            
                        </div>
                        <div class="relative opacity-80 bg-primary-500 dark:bg-primaryDark-accent rounded-b-lg">  
                            <ps-label v-if="paiditem && paiditem.item.isSoldOut == '1'" class="font-medium text-sm lg:text-base lg:py-1.5 py-2 rounded-b-lg text-center" textColor="text-textLight dark:text-textDark"> {{ $t('paid_item_horizontal_item__sold_out') }}</ps-label>
                        </div>
                        
                    </div>
    
                    <paid-ad-item-paid-status :status="paiditem ? paiditem.paidStatus : ''"></paid-ad-item-paid-status>
                </div>
                    <div class="flex flex-row pt-2 px-3">
                        <ps-label class="  truncate font-medium text-sm lg:text-base" > {{paiditem ? paiditem.item.title : ''}} </ps-label>
                        <ps-label class="ms-2 flex-grow font-light text-xxs lg:text-xs" textColor="text-primary-500 dark:text-primaryDark-accent"> {{paiditem ? paiditem.item.conditionOfItem.name : ''}} </ps-label>  
                    </div>
                    <ps-label class="pt-1 px-3 font-medium text-xs lg:text-base" textColor="text-primary-500 dark:text-primaryDark-accent"> {{ paiditem ? paiditem.item.itemCurrency.currencySymbol : '' }} {{ formatPrice(paiditem ? paiditem.item.price : '') }} </ps-label>
                    <div class="pt-1 px-3 flex justify-between "> 
                        <div class="flex mt-1 ">
                            <ps-icon textColor="text-secondary-400 dark:text-secondaryDark-grey" name="location" h="14" w="14" class="text-secondary-400 dark:text-textdark-100 me-1" />
                            <ps-label class="truncate font-light text-xxs lg:text-sm " textColor="text-secondary-400 dark:text-secondaryDark-grey"> {{paiditem ? paiditem.item.itemLocation.name : ''}} </ps-label>
                        </div>
                        <div class="flex content-center items-center ">
                        
                            <ps-label class="truncate font-light text-xxs lg:text-sm" textColor="text-secondary-400 dark:text-secondaryDark-grey"> {{ paiditem ? paiditem.item.itemType.name : '' }} </ps-label>
                                
                        </div>
                    </div>
                
                <ps-line class="mt-2 mx-3"/>
                <div class="pt-2 lg:px-3 px-2 flex content-centerjustify-between "> 
                    <div class="flex flex-row mt-1">
                        <ps-label class="font-light text-xxs lg:text-xs" textColor="text-secondary-400 dark:text-secondaryDark-grey" >{{ $t('paid_item_horizontal_item__start') }} :  </ps-label>
                        <ps-label class="ms-1 font-medium text-xxs lg:text-sm" >  {{ paiditem ? paiditem.startDate : ''}} </ps-label>
                    </div>     
                </div>

                <div class="pt-2 lg:px-3 px-2 flex content-center justify-between "> 
                    <div class="flex flex-row mt-1">
                        <ps-label class="font-light text-xxs lg:text-xs" textColor="text-secondary-400 dark:text-secondaryDark-grey" >{{ $t('paid_item_horizontal_item__end') }} :  </ps-label>
                        <ps-label class="ms-1 font-medium text-xxs lg:text-sm"> {{paiditem ? paiditem.endDate : ''}} </ps-label>
                    </div>     
                </div>

                <div class="pt-2 lg:px-3 px-2 flex content-center  justify-between "> 
                    <div class="flex flex-row mt-1">
                        <ps-label class="font-light text-xxs lg:text-xs" textColor="text-secondary-400 dark:text-secondaryDark-grey" >{{ $t('paid_item_horizontal_item__total_spending') }} :  </ps-label>
                        <ps-label class="ms-1 font-medium text-xxs lg:text-sm"> {{paiditem ? paiditem.item.itemCurrency.currencySymbol : ''}} {{paiditem ? paiditem.amount : ''}} </ps-label>
                    </div>     
                </div>
                <div class="mb-4"/>
            </div>
        </ps-card>
    </div>
    <!-- END Pscard -->
</template>

<script lang="ts">

// Components
import PsLabel from '@/components/core/label/PsLabel.vue';
import PaidAdItemPaidStatus from './PaidAdItemPaidStatus.vue';
import PsCard from '@/components/core/card/PsCard.vue';
import PsIcon from '@/components/core/icons/PsIcon.vue';
import PsLine from '@/components/core/line/PsLine.vue';

//language
import { i18n } from '@/assets/locales/index';

import PsConfig from  '@/config/PsConfig';
import format from 'number-format.js';

// Objects
import PaidAdItem from '@/object/PaidAdItem';

// Providers
import { createPaidAdItemProviderState } from "@/store/modules/item/PaidAdItemProvider";
import { PsValueProvider } from "@/store/modules/core/PsValueProvider";
import { usePsValueHolderState } from '@/object/core/PsValueHolder';
export default {
    name : "PaidAdItemHorizontalItem",
    components : {        
        PsLabel,
        PsCard,
        PsIcon,
        PsLine,
        PaidAdItemPaidStatus
    },
    props : {
        paiditem : { type : PaidAdItem } ,
        onClick : Function
    },
    setup() {
        // Inject Provider
        PsValueProvider.psValueHolder = usePsValueHolderState();
        const itempaidProvider = createPaidAdItemProviderState();
        const psValueHolder = PsValueProvider.psValueHolder;
        function formatPrice(value) {
            if(value.toString() == '0') {
                return i18n.global.t('item_price__free');
            }else {
                return format(PsConfig.priceFormat, value);
            }
        }
        return {
            itempaidProvider,
            formatPrice,
            psValueHolder
        }
    }
}
</script>