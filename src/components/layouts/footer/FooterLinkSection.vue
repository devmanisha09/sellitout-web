<template>
    <div class="sm:h-72 h-176 text-100 bg-secondary-900 flex flex-col justify-between ">
        <div class='w-mobile sm:w-median lg:w-large mx-auto'>
            <div class="grid sm:grid-cols-12 grid-cols-4  gap-4 sm:gap-3.5 lg:gap-4 text-textLight mt-8" >
                <div class="sm:col-span-8 col-span-4 grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-8 gap-4 sm:gap-3.5 lg:gap-4">
                    <div class="col-start-2 sm:col-start-1 col-span-2 mb-6">
                        <ps-label class="font-medium mb-4 lg:text-2xl text-xl" textColor="text-textLight" textSize="font-light lg:text-sm text-xs"> {{ $t("footer__shop") }} </ps-label>
                         <ps-label class="mt-2 font-light lg:text-sm text-xs" >
                            <ps-route-link

                                :to="{name: 'category-list' }"
                                textColor="text-textLight" textSize="font-light lg:text-sm text-xs">
                                    {{ $t("footer__categories") }}
                            </ps-route-link>
                        </ps-label>

                        <!-- <ps-label class="mt-2 " >
                            <ps-route-link
                                class=""
                                :to="{name: 'deal-list' }"
                                textColor="text-textLight"  textSize="font-light lg:text-sm text-xs"
                                >
                                     {{ $t("footer__deals") }}
                            </ps-route-link>
                        </ps-label> -->

                        <ps-label class="mt-2 font-light lg:text-sm text-xs cursor-pointer" @click="viewAllRecentItemList" textColor="text-textLight" textSize="font-light lg:text-sm text-xs">
                                 {{ $t("footer__latest_posts") }}
                        </ps-label>

                        <ps-label class="my-2 font-light lg:text-sm text-xs cursor-pointer" @click="viewAllPopularItemList" textColor="text-textLight" textSize="font-light lg:text-sm text-xs">
                                 {{ $t("footer__popular_posts") }}
                        </ps-label>

                        <!-- <ps-label class="mt-2 font-light lg:text-sm text-xs" >
                            <ps-route-link
                                class=""
                                :to="{name: 'followers' }" textColor="text-textLight" textSize="font-light lg:text-sm text-xs">
                                    {{ $t("footer__followers") }}
                            </ps-route-link>
                        </ps-label> -->

                    </div>

                    <div class="col-start-2 sm:col-start-3 col-span-2 mb-6">
                        <ps-label class=" mb-4 font-medium lg:text-2xl text-xl" textColor="text-textLight" textSize="font-light lg:text-sm text-xs"> {{ $t("footer__support") }} </ps-label>
                        <ps-label class="mt-2 font-light lg:text-sm text-xs" >
                        <ps-route-link
                            :to="{name: 'contact' }" textColor="text-textLight" textSize="font-light lg:text-sm text-xs">
                               {{ $t("footer__contact_us") }}
                        </ps-route-link>
                        </ps-label>

                        <!-- <ps-label class="mt-2 font-light lg:text-sm text-xs" >
                            <ps-route-link
                                :to="{name: 'safety' }" textColor="text-textLight" textSize="font-light lg:text-sm text-xs">
                                    {{ $t("footer__safety_tips") }}
                            </ps-route-link>
                        </ps-label>

                        <ps-label class="mt-2 font-light lg:text-sm text-xs" >
                            <ps-route-link
                                :to="{name: 'privacy' }" textColor="text-textLight" textSize="font-light lg:text-sm text-xs">
                                    {{ $t("footer__privacy_policy") }}
                            </ps-route-link>
                        </ps-label> -->
                    </div>

                    <div class="col-start-2 sm:col-start-5 col-span-2 mb-6" >
                        <ps-label class="font-medium lg:text-2xl text-xl mb-4" textColor="text-textLight" textSize="font-light lg:text-sm text-xs"> {{ $t("footer__company") }} </ps-label>
                        <!-- <ps-label class="mt-2 font-light lg:text-sm text-xs" >
                            <ps-route-link
                                :to="{name: 'about' }" textColor="text-textLight" textSize="font-light lg:text-sm text-xs">
                                    {{ $t("footer__about_us") }}
                            </ps-route-link>
                        </ps-label> -->
                        <ps-label class="mt-2 font-light lg:text-sm text-xs" >
                            <ps-route-link
                                :to="{name: 'blog-list' }" textColor="text-textLight" textSize="font-light lg:text-sm text-xs">
                                    {{ $t("footer__blogs") }}
                            </ps-route-link>
                        </ps-label>

                    </div>
                </div>

                <div class="col-span-4 grid grid-cols-4 gap-4 sm:gap-3.5 lg:gap-4">
                    <ps-label class="sm:col-start-1 col-start-2 col-span-4 " >
                    <ps-route-link
                        class=""
                        :to="{name: 'dashboard' }">
                        <div class="flex flex-row">
                            <img @click="gotToHome" src="@/assets/images/fbs_icon.png" class=" lg:w-12 w-8 cursor-pointer object-cover " alt="Footer Logo" width="50px" height="50px"/>
                            <ps-label class="font-medium lg:text-xl text-base text-textLight my-auto ms-2" textColor="text-textLight" textSize="font-light lg:text-sm text-xs"> {{ $t("footer__flutter_buysell") }} </ps-label>
                        </div>
                    </ps-route-link>
                    </ps-label>
                    <ps-label class="sm:col-start-1 col-start-2 col-span-2 mt-2" >
                    <ps-link  textColor="text-textLight" url="https://play.google.com/store/apps/details?id=com.panaceasoft.flutterbuyandsell">
                        <div class=" p-1 pt-2 bg-black rounded-lg ">
                            <img src="@/assets/images/get_on_google_play.png" class="w-full cursor-pointer object-cover" alt="goole play store" width="50px" height="50px"/>
                        </div>

                    </ps-link>
                    </ps-label>
                    <ps-label class="sm:col-start-3 col-start-2 col-span-2 mt-2" >
                    <ps-link textColor="text-textLight" url="https://www.apple.com/app-store/">
                       <div class=" p-1 bg-black rounded-lg ">
                            <img src="@/assets/images/get_on_apple_store.png" class=" w-full cursor-pointer object-cover" alt="goole play store" width="50px" height="50px"/>
                        </div>
                    </ps-link>
                    </ps-label>
                </div>

            </div>
        </div>

        <div class='mb-4 flex justify-center items-center '>
            <ps-label-caption textColor="text-textLight"> Copyright @ SELL IT OUT 2021 </ps-label-caption>
        </div>
    </div>
</template>

<script>

// Libs
import { ref } from 'vue';
import router from '@/router';
import PsLabel from '@/components/core/label/PsLabel.vue';
 import PsLink from '@/components/core/link/PsLink.vue'
import PsRouteLink from '@/components/core/link/PsRouteLink.vue'
import PsLabelCaption from '@/components/core/label/PsLabelCaption.vue'

// Holders
import { PsValueProvider } from "@/store/modules/core/PsValueProvider";
import { useProductProviderState } from "@/store/modules/item/ProductProvider";
import { usePopularItemProviderState } from '@/store/modules/item/PopularItemProvider';

export default {
    components : {
        PsLabel,
         PsLink,
        PsRouteLink,
        PsLabelCaption
    },
    setup() {
        // Inject Item Provider
        const psValueHolder = PsValueProvider.psValueHolder;
        const locationId = ref(psValueHolder.locationId);

        // Inject Item Provider
        const itempopularProvider = usePopularItemProviderState();
        const itemrecentProvider = useProductProviderState();
        itempopularProvider.paramHolder.itemLocationId = locationId.value;
        function gotToHome() {
            router.push({name : "dashboard"});
        }

        function viewAllRecentItemList() {
            const params = itemrecentProvider.paramHolder.getUrlParamsAndQuery();
            params['name'] = 'item-list';
            router.push(params);
        }

        function viewAllPopularItemList() {

            const params = itempopularProvider.paramHolder.getUrlParamsAndQuery();
            params['name'] = 'item-list';

            // Redirect
            router.push(params);

        }

        return  {
            gotToHome,
            viewAllPopularItemList,
            viewAllRecentItemList
        }
    }
}
</script>
