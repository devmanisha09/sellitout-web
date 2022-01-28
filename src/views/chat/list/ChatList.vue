<template>
    <div class="mt-36 mb-16 w-mobile sm:w-median lg:w-large mx-auto">
        <div class="grid lg:grid-cols-12 sm:grid-cols-8 grid-cols-4  gap-4 sm:gap-3.5 lg:gap-4 ">
            <div class="col-span-4 sm:col-span-8 lg:col-span-12">
                <ps-label class="text-xl sm:text-3xl font-medium"> {{ $t("chat_list__messages") }}</ps-label>
            </div>
            <div class="col-start-0 col-span-4 sm:col-span-2 lg:col-span-3" >
               
                <div class=" ">
                    <div class=" flex flex-row space-x-3.5 sm:space-x-0 space-y-0 sm:space-y-3.5 sm:flex-col" id="sellerbtn" v-if="isSellerFocus" :disabled="true">
                        <ps-button class="w-full" @click="sellerClicked" >
                            {{ $t("chat_list__from_seller") }}
                        </ps-button>
                        
                        <ps-button class="w-full" theme="dark:bg-secondary-100 dark:text-textLight bg-primary-000 text-primary-400" @click="buyerClicked">
                            {{ $t("chat_list__from_buyer") }}
                        </ps-button>
                    </div>

                    <div class="flex flex-row space-x-3.5 sm:space-x-0 space-y-0 sm:space-y-3.5 sm:flex-col" id="buyerbtn"  v-else :disabled="true">
                        <ps-button class="w-full" theme='dark:bg-secondary-100 dark:text-textLight bg-primary-000 text-primary-400' @click="sellerClicked" >
                            {{ $t("chat_list__from_seller") }}
                        </ps-button>
                        
                        <ps-button class="w-full" @click="buyerClicked">
                            {{ $t("chat_list__from_buyer") }}
                        </ps-button>
                    </div>
                </div>
                
            </div>
            <div class="col-span-4 sm:col-span-6 lg:col-span-9">
                <div class="col-span-4 sm:col-span-6 lg:col-span-9 mb-2" v-if="isSellerFocus">
                    <ps-label class="text-sm sm:text-xl font-medium" > {{ $t("chat_list__messages_from_seller") }}</ps-label>
                </div>
                <div class="col-span-4 sm:col-span-6 lg:col-span-9 mb-2" v-else>
                    <ps-label class="text-sm sm:text-xl font-medium">{{ $t("chat_list__messages_from_buyer") }}</ps-label>
                </div>
                <div v-if="ps_loading == true">
                    <div id="seller" class="w-full flex flex-col bg-primary-000 dark:bg-primaryDark-black lg:p-4 p-2 sm:p-3 rounded-2xl" >
                        <div class='w-full ' >
                            <div class=" flex flex-col">
                                <!-- Column -->
                                <div class="w-full mt-2" v-for="index in 3" :key="index">
                                    <chat-skeletor-item />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Seller Chat horizontal -->
                <div id="seller" class="flex flex-row mb-16" v-if="isSellerFocus && ps_loading == false">
                    <div v-if="chathistorylistProvider.chatHistoryList.data == null "
                    class="w-full flex flex-col bg-primary-000 dark:bg-primaryDark-black lg:p-4 p-2 sm:p-3 rounded-2xl">
                       <ps-icon name="chatalt" textColor="text-secondary-400 dark:text-secondaryDark-grey" class='mt-2 w-full mx-auto' w="80" h="80" />  
                       <ps-label-caption-3 class="text-center mb-2" >{{ $t("chat_list__no_message_from_seller") }} </ps-label-caption-3>
                       
                    </div>
                    <div v-else class='w-full flex flex-col bg-primary-000 dark:bg-primaryDark-black lg:p-4 p-2 sm:p-3 rounded-2xl' >
                        <div class="flex flex-wrap ">
                            <!-- Column -->
                            <div class=" mt-2 w-full" v-for="chathistory in chathistorylistProvider.chatHistoryList.data" :key="chathistory.id">
                                <ps-route-link :to="{
                                    name : 'chat', 
                                    query: { 
                                        buyerUserId : chathistory.buyerUserId,
                                        sellerUserId : chathistory.sellerUserId,
                                        itemName : chathistory.item.title ,
                                        itemId : chathistory.itemId,
                                        itemImageName : chathistory.item.defaultPhoto.imgPath,
                                        itemPrice : chathistory.item.price,
                                        currency : chathistory.item.itemCurrency.currencySymbol,
                                        condition : chathistory.item.conditionOfItem.name,
                                        chatFlag : PsConst.CHAT_FROM_SELLER.toString()

                                    }
                                }">
                                <chat-horizontal-item  :chathistory="chathistory" />
                                </ps-route-link>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- End Seller Chat horizontal -->

                <!-- Buyer Chat horizontal -->
                <div id="buyer" class="flex flex-row mb-16 " v-else-if="ps_loading == false">
                    <div v-if="chatbuyerhistorylistProvider.chatHistoryList.data == null "
                     class="w-full flex flex-col bg-primary-000 dark:bg-primaryDark-black lg:p-4 p-2 sm:p-3 rounded-2xl">
                       <ps-icon name="chatalt" textColor="text-secondary-400 dark:text-secondaryDark-grey" class='mt-2 w-full mx-auto' w="80" h="80" />  
                       <ps-label-caption-3 class="text-center mb-2" >{{ $t("chat_list__no_message_from_buyer") }} </ps-label-caption-3>
                       
                    </div>
                    <div v-else class='w-full ' >
                        <div class="w-full flex flex-col bg-primary-000 dark:bg-primaryDark-black lg:p-4 p-2 sm:p-3 rounded-2xl ">
                            <!-- Column -->
                            <div class="w-full mt-2" v-for="chathistory in chatbuyerhistorylistProvider.chatHistoryList.data" :key="chathistory.id">
                               <ps-route-link :to="{
                                    name : 'chat', 
                                    query: { 
                                        buyerUserId : chathistory.buyerUserId,
                                        sellerUserId : chathistory.sellerUserId,
                                        itemName : chathistory.item.title ,
                                        itemId : chathistory.itemId,
                                        itemImageName : chathistory.item.defaultPhoto.imgPath,
                                        itemPrice : chathistory.item.price,
                                        currency : chathistory.item.itemCurrency.currencySymbol,
                                        condition : chathistory.item.conditionOfItem.name,
                                        chatFlag : PsConst.CHAT_FROM_BUYER.toString()

                                    }
                                }">
                               <chat-buyer-horizontal-item  :chathistory="chathistory" />
                                </ps-route-link>
                               
                            </div>
                        </div>
                    </div>
                </div>
                <!-- End Buyer Chat horizontal -->
            </div>
        </div>
    </div>
</template>


<script lang="ts">

import { ref } from 'vue';
import router from '@/router';
import PsIcon from '@/components/core/icons/PsIcon.vue'
import PsLabelCaption3 from '@/components/core/label/PsLabelCaption3.vue'
import PsButton from '@/components/core/buttons/PsButton.vue';
import PsRouteLink from '@/components/core/link/PsRouteLink.vue';

// Providers
import { createChatHistoryListProviderState, useChatHistoryListProviderState } from "@/store/modules/chat/ChatHistoryListProvider";
import { PsValueProvider } from "@/store/modules/core/PsValueProvider";
import PsLabel from '@/components/core/label/PsLabel.vue';

// Holders
import ChatHistoryParameterHolder from '@/object/holder/ChatHistoryParameterHolder';

import ChatHorizontalItem from "@/components/modules/chat/ChatHorizontalItem.vue";
import ChatBuyerHorizontalItem from "@/components/modules/chat/ChatBuyerHorizontalItem.vue";
import ChatSkeletorItem from "@/components/modules/chat/ChatSkeletorItem.vue";
import PsConst from '@/object/constant/ps_constants';

export default {
    name : "ChatListView",
    components : {
        PsButton,
        PsLabel,
        PsLabelCaption3,
        PsIcon,
        ChatHorizontalItem,
        ChatBuyerHorizontalItem,
        ChatSkeletorItem,
        PsRouteLink
    },
    setup () {
        
        // Inject Chat Provider
        const psValueHolder = PsValueProvider.psValueHolder;
        const chathistorylistProvider = useChatHistoryListProviderState(); 
        const chatbuyerhistorylistProvider = createChatHistoryListProviderState();
        const loginUserId = psValueHolder.getLoginUserId();
        if(loginUserId == null || loginUserId == '' || loginUserId == PsConst.NO_LOGIN_USER) {
            router.push({ name : "login"});
        }
        const holder = new ChatHistoryParameterHolder().resetParameterHolder();
        const ps_loading = ref(true);
        const isSellerFocus = ref(true);

        //load Chat List
        holder.userId = loginUserId;
        holder.returnType = PsConst.CHAT_TYPE_SELLER;
        loadSellerList();
        async function loadSellerList(){
            await chathistorylistProvider.resetChatHistoryList(holder);
            ps_loading.value = false;
        }
        
        async function sellerClicked() {
           
            isSellerFocus.value = true;
            ps_loading.value = true ;
            holder.userId = loginUserId;
            holder.returnType = PsConst.CHAT_TYPE_SELLER;
            await chathistorylistProvider.resetChatHistoryList(holder);
           
            ps_loading.value = false;
            
        }

        async function buyerClicked() {
            isSellerFocus.value = false;
            ps_loading.value = true ;
            holder.userId = loginUserId;
            holder.returnType = PsConst.CHAT_TYPE_BUYER;
            await chatbuyerhistorylistProvider.resetChatHistoryList(holder);
          
            ps_loading.value = false ;
           
        }

        return {
            chathistorylistProvider,
            chatbuyerhistorylistProvider,
            sellerClicked,
            buyerClicked,
            ps_loading,
            isSellerFocus,
            PsConst,
        }
    }
}
</script>