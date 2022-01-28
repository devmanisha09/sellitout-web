<template>
    <div class="">

        <div class="">

            <div class="sm:mt-24 mt-24 lg:mt-24 w-full">

                <div class="bg-black h-48 ">

                    <div class="relative bg-black sm:h-40 h-40 ">
                        <div class="absolute opacity-60">
                            <!-- <img alt="Placeholder" width="100%" height="auto" class="w-screen lg:h-64 lg:block hidden object-cover rounded-md" src="@/assets/images/chart.jpeg">
                            <img alt="Placeholder" width="100%" height="auto" class="w-screen hidden sm:block lg:hidden h-64 object-cover rounded-md" src="@/assets/images/chart-tb.jpeg">
                            <img alt="Placeholder" width="100%" height="auto" class="w-screen block sm:hidden h-64 object-cover rounded-md" src="@/assets/images/chart-mb.png"> -->
                            <img alt="Placeholder" width="100%" height="auto"  class="w-screen h-48 object-cover" src="@/assets/images/chart.jpeg">
                        </div>
                        <div class="relative w-mobile sm:w-median lg:w-large mx-auto" >
                            <div class="pt-5 grid lg:grid-cols-12 sm:grid-cols-8 grid-cols-4  gap-2 sm:gap-3.5 lg:gap-4 ">
                                <div class=" opacity-80 flex flex-col items-center w-full col-span-1 sm:col-span-2 lg:col-span-3 my-2 bg-background dark:bg-backgroundDark px-1 py-2 lg:p-1 rounded-x sm:rounded-xl lg:rounded-2xl">
                                    <div class="   mb-2">
                                        <ps-icon textColor="text-primary-500 dark:text-primaryDark-accent" name="edit" h="24" w="28" class="hidden sm:flex" />
                                        <ps-icon textColor="text-primary-500 dark:text-primaryDark-accent" name="edit" h="20" w="24" class="flex sm:hidden"/>
                                    </div>
                                    <div class="flex-1 w-full">
                                        <div class="font-semibold lg:text-base sm:text-xs text-xxs flex justify-center">
                                            <ps-label class="flex-grow-0 font-medium" textColor="text-primary-500 dark:text-primaryDark-accent"> {{ $t("dashboard__create") }} </ps-label>
                                        </div>
                                        <ps-label class = " p-2 text-center hidden text-md sm:text-xs font-light sm:flex"  > {{ $t("dashboard__create_text") }}  </ps-label>
                                    </div>
                                </div>

                                <div class=" opacity-80 flex flex-col items-center w-full col-span-1 sm:col-span-2 lg:col-span-3 my-2 bg-background dark:bg-backgroundDark px-1 py-2 lg:p-1 rounded-x sm:rounded-xl lg:rounded-2xl">
                                    <div class="dark:text-primaryDark-accent text-primary-500 mb-2">
                                        <font-awesome-icon :icon="['fas', 'bullhorn']" class="text-primary-500 dark:text-primaryDark-accent lg:text-base text-sm" />
                                    </div>
                                    <div class="flex-1 w-full ">
                                        <div class="font-semibold lg:text-base sm:text-xs text-xxs flex justify-center">
                                            <ps-label class="flex-grow-0 font-medium"  textColor="text-primary-500 dark:text-primaryDark-accent"> {{ $t("dashboard__promote") }} </ps-label>
                                        </div>
                                        <ps-label class = " p-2 text-center text-md font-light sm:text-xs hidden sm:flex"  > {{ $t("dashboard__promote_text") }}  </ps-label>
                                    </div>
                                </div>

                                <div class=" opacity-80 flex flex-col items-center w-full col-span-1 sm:col-span-2 lg:col-span-3 my-2 bg-background dark:bg-backgroundDark px-1 py-2 lg:p-1 rounded-x sm:rounded-xl lg:rounded-2xl">
                                    <div class=" mb-2">
                                            <ps-icon textColor="text-primary-500 dark:text-primaryDark-accent" name="chat" h="24" w="28" class="hidden sm:flex" />
                                        <ps-icon textColor="text-primary-500 dark:text-primaryDark-accent" name="chat" h="20" w="24" class="flex sm:hidden"/>
                                    </div>
                                    <div class="flex-1 w-full ">
                                        <div class="font-semibold lg:text-base sm:text-xs text-xxs  flex justify-center">
                                            <ps-label class="flex-grow-0 font-medium"  textColor="text-primary-500 dark:text-primaryDark-accent"> {{ $t("dashboard__negotiate") }} </ps-label>
                                        </div>
                                        <ps-label class = " p-2 text-center text-md sm:text-xs font-light hidden sm:flex" > {{ $t("dashboard__negotiate_text") }}  </ps-label>
                                    </div>
                                </div>

                                <div class=" opacity-80 flex flex-col items-center w-full col-span-1 sm:col-span-2 lg:col-span-3 my-2 bg-background dark:bg-backgroundDark px-1 py-2 lg:p-1 rounded-x sm:rounded-xl lg:rounded-2xl">
                                    <div class=" dark:text-primaryDark-accent text-primary-500 mb-2">
                                        <font-awesome-icon :icon="['fas', 'handshake']" class=" lg:text-base text-sm"  />
                                    </div>
                                    <div class="flex-1 w-full items-center ">
                                        <div class="font-semibold lg:text-base sm:text-xs text-xxs  flex justify-center">
                                            <ps-label class="flex-grow-0 font-medium"  textColor="text-primary-500 dark:text-primaryDark-accent"> {{ $t("dashboard__accomplished") }} </ps-label>
                                        </div>
                                        <ps-label class = " p-2 text-center text-md sm:text-xs font-light hidden sm:flex" > {{ $t("dashboard__accomplished_text") }}  </ps-label>
                                    </div>
                                </div>


                            </div>

                        </div>
                    </div>
                    <div class="relative w-mobile sm:w-median lg:w-large mx-auto">
                        <div class="bg-background dark:bg-backgroundDark rounded-xl py-2 px-4 shadow-md dark:shadow-xl w-11/12 mx-auto">
                            <search-for-large-screem @clicklocation="locationFilterClicked" @onSubclick="subLocationFilterClicked" />
                        </div>
                    </div>

                </div>

            </div>

            <div>

                <div class="sm:mt-16 mt-44  w-mobile sm:w-median lg:w-large mx-auto">
                    <div >
                        <!-- <ps-label-header-4 class="font-medium "  >{{ $t("dashboard__category_header") }}</ps-label-header-4> -->
                    </div>
                    <!-- <div class="grid lg:grid-cols-12 sm:grid-cols-6 grid-cols-4  gap-2 sm:gap-3.5 lg:gap-4 mt-6 gap-y-4" v-if="categoryProvider.itemList.data != null">
                        <div v-for="category in categoryProvider.itemList.data.slice(0,6)" :key="category.catId" class="w-full lg:col-span-2 sm:col-span-1 col-span-2 hidden sm:block">
                            <ps-route-link
                                :to="{name: 'item-list',
                                query: {
                                    catId: category.catId,
                                    catName: category.catName } }">
                                <category-horizontal-item :category="category" />
                            </ps-route-link>
                        </div>

                        <div v-for="category in categoryProvider.itemList.data.slice(0,4)" :key="category.catId" class="col-span-1 block sm:hidden">
                            <ps-route-link
                                :to="{name: 'item-list',
                                query: {
                                    catId: category.catId,
                                    catName: category.catName } }">
                                <category-horizontal-item :category="category" />
                            </ps-route-link>
                        </div>

                    </div> -->

                    <div class="flex justify-end mt-4">
                            <ps-route-link :to="{name: 'category-list'}">
                                <ps-button class="flex flex-row " theme="bg-primary-500 dark:bg-primaryDark-accent text-textLight dark:text-textDark capitalize px-4 py-1"> {{ $t("dashboard__view_all") }}
                                    <ps-icon class="ms-1 mt-1" textColor="text-textLight dark:text-textDark" name="arrowNarrowRight" h="20" w="24"/>
                                    </ps-button>
                            </ps-route-link>
                    </div>
                </div>
            </div>

            <!-- Start recent Posts -->
            <div  v-if="itemrecentProvider.itemList?.data != null">

                <div class=" w-mobile sm:w-median lg:w-large mx-auto">

                    <!-- <div class="">
                        <ps-label-header-4 class="font-medium " > {{ $t("dashboard__recent_items") }} </ps-label-header-4>
                    </div> -->
                    <div class="w-full mt-4">
                        <div v-if="itemrecentProvider.itemList?.data != null">
                            <div class="grid lg:grid-cols-12 sm:grid-cols-8 grid-cols-4  gap-4 sm:gap-3.5 lg:gap-4">

                                <div class="w-full col-span-2 lg:col-span-2" v-for="item in itemrecentProvider.itemList.data.slice(0,30)" :key="item.id">

                                    <ps-route-link :to="{ name: 'item', query: { itemId: item.id, itemName: item.title  }}">
                                        <item-horizontal-item  :item="item" />
                                    </ps-route-link>

                                </div>

                            </div>
                        </div>
                        <div v-else-if="itemrecentProvider.itemList != null && itemrecentProvider.loading.value ">
                            <div class="grid lg:grid-cols-12 sm:grid-cols-8 grid-cols-4  gap-4 sm:gap-3.5 lg:gap-4">

                                <div class="w-full col-span-2 lg:col-span-2" v-for="i in 30" :key="i">

                                    <item-horizontal-skeletor-item />

                                </div>

                            </div>
                        </div>
                    </div>

                <div class="flex justify-end mt-4">
                        <ps-route-link :to="{name: 'item-list', query: recentParams['query'] }" >
                            <ps-button class="flex flex-row " theme="bg-primary-500 dark:bg-primaryDark-accent text-textLight dark:text-textDark capitalize px-4 py-1">
                                <!-- {{ $t("dashboard__view_all") }} -->View all
                                <ps-icon class="ms-1 mt-1" textColor="text-textLight dark:text-textDark" name="arrowNarrowRight" h="20" w="24"/>
                                </ps-button>
                        </ps-route-link>
                    </div>
                </div>



            </div>
            <!-- End recent Posts -->

            <!-- Start Popular Posts -->
            <!-- <div  v-if="itempopularProvider.itemList?.data != null">

                <div class=" mt-8 mb-12 w-mobile sm:w-median lg:w-large mx-auto">

                    <div class="mt-12">
                        <ps-label-header-4 class="font-medium " > {{ $t("dashboard__popular_items") }}  </ps-label-header-4>

                    </div>
                    <div class="  mt-4">
                        <div v-if="itempopularProvider.itemList?.data != null">
                            <div class="grid lg:grid-cols-12 sm:grid-cols-8 grid-cols-4  gap-4 sm:gap-3.5 lg:gap-4 ">

                                <div class="w-full col-span-2 lg:col-span-3" v-for="item in itempopularProvider.itemList.data.slice(0,8)" :key="item.id">

                                    <ps-route-link :to="{ name: 'item', query: { itemId: item.id, itemName: item.title  }}">
                                        <item-horizontal-item  :item="item" />
                                    </ps-route-link>

                                </div>

                            </div>
                        </div>
                        <div v-else-if="itempopularProvider.itemList != null && itempopularProvider.loading.value ">
                            <div class="grid lg:grid-cols-12 sm:grid-cols-8 grid-cols-4  gap-4 sm:gap-3.5 lg:gap-4">

                                <div class="col-span-2 lg:col-span-3 w-full" v-for="i in 10" :key="i">

                                    <item-horizontal-skeletor-item />

                                </div>

                            </div>
                        </div>

                            <div class="flex justify-end mt-4">
                                <ps-route-link :to="{name: 'item-list', query: popularParams['query'] }" >
                                    <ps-button class="flex flex-row " theme="bg-primary-500 dark:bg-primaryDark-accent text-textLight dark:text-textDark capitalize px-4 py-1">
                                        {{ $t("dashboard__view_all") }}
                                        <ps-icon class="ms-1 mt-1" textColor="text-textLight dark:text-textDark" name="arrowNarrowRight" h="20" w="24"/>
                                        </ps-button>
                                </ps-route-link>
                            </div>


                    </div>

                </div>

            </div> -->
            <!-- End Popular Posts -->

            <!-- item from followers -->
            <div v-if="itemFollowerProvider.itemList?.data != null" >
                <div class="w-mobile sm:w-median lg:w-large mx-auto mt-12">

                    <ps-label-header-4 class="font-medium " >  {{ $t("dashboard__items_from_followers") }}  </ps-label-header-4>

                    <div class="">
                        <div class="w-full mt-6" >
                            <div class="">
                                <div v-if="itemFollowerProvider.itemList?.data != null">
                                    <div class="grid lg:grid-cols-12 sm:grid-cols-8 grid-cols-4  gap-4 sm:gap-3.5 lg:gap-4">

                                        <div class="w-full col-span-2 lg:col-span-3" v-for="item in itemFollowerProvider.itemList.data.slice(0,20)" :key="item.id">

                                            <ps-route-link :to="{ name: 'item', query: { itemId: item.id, itemName: item.title  }}">
                                                <item-horizontal-item  :item="item" />
                                            </ps-route-link>

                                        </div>

                                    </div>
                                </div>
                                <div v-else-if="itemFollowerProvider.itemList != null && itemFollowerProvider.loading.value ">
                                    <div class="grid lg:grid-cols-12 sm:grid-cols-8 grid-cols-4  gap-4 sm:gap-3.5 lg:gap-4">

                                        <div class="w-full col-span-2 lg:col-span-3" v-for="i in 20" :key="i">

                                            <item-horizontal-skeletor-item />

                                        </div>

                                    </div>
                                </div>

                            </div>

                        </div>

                        <div class="justify-end flex mt-4">
                            <div class="flex-grow-0">
                                <ps-route-link :to="{name: 'follower-items' }" class="flex-grow-0">
                                    <ps-button class="flex flex-row " theme="bg-primary-500 dark:bg-primaryDark-accent text-textLight dark:text-textDark capitalize px-4 py-1">
                                        {{ $t("dashboard__view_all") }}
                                        <ps-icon class="ms-1 mt-1" textColor="text-textLight dark:text-textDark" name="arrowNarrowRight" h="20" w="24"/>
                                        </ps-button>
                                </ps-route-link>
                            </div>
                        </div>

                    </div>


                </div>
            </div>
            <!-- end item from follower -->

            <!-- Start Blog Posts -->
            <div v-if="blogProvider.blogList != null && blogProvider.blogList.data != null">
                <div class="w-mobile sm:w-median lg:w-large mx-auto">
                    <div class="mt-8">
                        <ps-label-header-4 class="font-medium " > {{ $t("dashboard__blog") }} </ps-label-header-4>
                    </div>


                    <div class=" pb-10 mt-4">
                        <div class="">
                            <div class="w-full" >
                                <div class="grid lg:grid-cols-12 sm:grid-cols-8 grid-cols-4  gap-4 sm:gap-3.5 lg:gap-4" >
                                    <!-- Column -->
                                    <!-- temporary trancate  -->
                                    <div class="w-full lg:col-span-3 col-span-2 " v-for="blog in blogProvider.blogList.data.slice(0,4)" :key="blog.id" >

                                        <ps-route-link :to="{ name: 'blog-detail', params: { blogId: blog.id, blogName: blog.name  }}">
                                            <blog-horizontal-item  :blog="blog" />
                                        </ps-route-link>

                                    </div>
                                    <!-- END Column -->

                                </div>
                            </div>

                            <div class="justify-end flex mt-4">
                                <div class="flex-grow-0">
                                    <ps-route-link :to="{ name: 'blog-list'}" class="flex-grow-0">
                                        <ps-button class="flex flex-row " theme="bg-primary-500 dark:bg-primaryDark-accent text-textLight dark:text-textDark capitalize px-4 py-1">
                                            {{ $t("dashboard__view_all") }}
                                            <ps-icon class="ms-1 mt-1" textColor="text-textLight dark:text-textDark" name="arrowNarrowRight" h="20" w="24"/>
                                            </ps-button>
                                    </ps-route-link>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <!-- End Blog Posts -->
        </div>

        <ps-confirm-dialog ref='ps_confirm_dialog' />
        <ps-loading-dialog ref="ps_loading_dialog"  :isClickOut='false'/>

    </div>
</template>

<script lang="ts">

// Libs
import { ref, defineAsyncComponent, onMounted } from 'vue';
import 'vue3-carousel/dist/carousel.css';
import { useI18n } from 'vue-i18n';

import router from "@/router";
import PsCoreAuth from "@/global/PsCoreAuth";
import "vue-skeletor/dist/vue-skeletor.css";

// Components
import PsButton from '@/components/core/buttons/PsButton.vue';
import PsLabel from '@/components/core/label/PsLabel.vue';
import PsIcon from '@/components/core/icons/PsIcon.vue';
import PsLabelHeader4 from '@/components/core/label/PsLabelHeader4.vue';
// import CategoryHorizontalItem from "@/components/modules/category/CategoryHorizontalItem.vue";
import BlogHorizontalItem from "@/components/modules/blog/BlogHorizontalItem.vue";
import ItemHorizontalSkeletorItem from "@/components/modules/item/ItemHorizontalSkeletorItem.vue";
import PsLoadingDialog from '@/components/core/dialog/PsLoadingDialog.vue';
import PsConfirmDialog from '@/components/core/dialog/PsConfirmDialog.vue';
import PsRouteLink from '@/components/core/link/PsRouteLink.vue';
import SearchForLargeScreem from "@/views/search/SearchForLargeScreen.vue";

// Providers
import { useRecentItemProviderState } from "@/store/modules/item/RecentItemProvider";
import { createCategoryProviderState } from "@/store/modules/category/CategoryProvider";
import { useItemLocationProviderState } from '@/store/modules/itemlocation/ItemLocationProvider';
import { useBlogProviderState } from "@/store/modules/blog/BlogProvider";
import { PsValueProvider } from "@/store/modules/core/PsValueProvider";

// Holders
import LocationParameterHolder from '@/object/holder/LocationParameterHolder';
import { usePopularItemProviderState } from '@/store/modules/item/PopularItemProvider';
import { useFollowerItemProviderState } from '@/store/modules/item/FollowerItemProvider';

import PsConfig from '@/config/PsConfig';
import PsConst from '@/object/constant/ps_constants';
import PsUtils from '@/utils/PsUtils';

const ItemHorizontalItem = defineAsyncComponent(() => import('@/components/modules/item/ItemHorizontalItem.vue'))

import { library } from '@fortawesome/fontawesome-svg-core';
import { faBullhorn,faHandshake } from '@fortawesome/free-solid-svg-icons'
library.add(faBullhorn,faHandshake)

export default {
    name : "DashboardView",
    components: {
        ItemHorizontalItem,
        // CategoryHorizontalItem,
        PsRouteLink,
        SearchForLargeScreem,
        PsLabelHeader4,
        PsButton,
        PsLabel,
        PsIcon,
        BlogHorizontalItem,
        ItemHorizontalSkeletorItem,
        PsLoadingDialog,
        PsConfirmDialog,

    },
    setup() {

        // Inject Provider
        const blogProvider = useBlogProviderState();
        const locationKeyword = ref('');
        const psValueHolder = PsValueProvider.psValueHolder;
        const ps_loading_dialog = ref();
        const ps_confirm_dialog = ref();

        psValueHolder.updateExpiryTimeForAction(); // only call from dashboard

        const searchKeyword = ref("");
        const locationName = ref(psValueHolder.locationName);
        const locationId = ref(psValueHolder.locationId);
        const t = useI18n;

        const itemlocationProvider = useItemLocationProviderState();

        // Inject Item Provider
        const itempopularProvider = usePopularItemProviderState();
        const itemFollowerProvider = useFollowerItemProviderState();
        const itemrecentProvider = useRecentItemProviderState();
        const categoryProvider = createCategoryProviderState();

        itempopularProvider.id = "Id from Dashboard";
        itemFollowerProvider.id = "Id from Dashboard";
        itemrecentProvider.id = "Id from Dashboard";
        const loginUserId = psValueHolder.getLoginUserId();

        const paramHolder = new LocationParameterHolder().getDefaultParameterHolder();
        const latitude  =  psValueHolder.locationLat == null || psValueHolder.locationLat == '' ? '0' : psValueHolder.locationLat;
        const longitude =  psValueHolder.locationLng == null || psValueHolder.locationLng == '' ? '0' : psValueHolder.locationLng;
        itemrecentProvider.paramHolder.lat = latitude.toString();
        itemrecentProvider.paramHolder.lng = longitude.toString();
        itemrecentProvider.paramHolder.mile = PsConfig.mile;


        itempopularProvider.paramHolder.lat = latitude.toString();
        itempopularProvider.paramHolder.lng = longitude.toString();
        itempopularProvider.paramHolder.mile = PsConfig.mile;


        itemFollowerProvider.paramHolder.lat = latitude.toString();
        itemFollowerProvider.paramHolder.lng = longitude.toString();
        itemFollowerProvider.paramHolder.mile = PsConfig.mile;


        const recentParams = itemrecentProvider.paramHolder.getUrlParamsAndQuery();
        const popularParams = itempopularProvider.paramHolder.getUrlParamsAndQuery();


        //load Blog List
        blogProvider.paramHolder.locationId = locationId.value;
        PsUtils.log("blog list");
        PsUtils.log(blogProvider.paramHolder);


        onMounted(() => {
            itemrecentProvider.loadItemList(loginUserId, itemrecentProvider.paramHolder);
            itempopularProvider.loadItemList(loginUserId, itempopularProvider.paramHolder);
            if(loginUserId != '' && loginUserId != PsConst.NO_LOGIN_USER) {
                itemFollowerProvider.loadItemList(loginUserId, itemFollowerProvider.paramHolder);
            }
            categoryProvider.loadItemList(loginUserId, categoryProvider.paramHolder);
            blogProvider.resetBlogList(loginUserId, blogProvider.paramHolder);
        });

        function searchClicked() {
            PsUtils.log("Search : " + searchKeyword.value);

            // Assign Keyword to recent provider
            itemrecentProvider.paramHolder.searchTerm = searchKeyword.value.toString();
            itemrecentProvider.paramHolder.itemLocationName = locationName.value.toString();
            itemrecentProvider.paramHolder.status = '1';

            // Prepare Query and Push to Next Screen
            const params = itemrecentProvider.paramHolder.getUrlParamsAndQuery();
            params['name'] = 'item-list';
            router.push(params);

            // Clear Search Term
            itemrecentProvider.paramHolder.searchTerm = '';
        }

        function loadLocationList() {
            PsUtils.log("Loading ...");

            itemlocationProvider.loadItemLocationList(psValueHolder.getLoginUserId(), paramHolder);
        }

        async function locationFilterClicked(value) {

            PsUtils.log(value);
            locationId.value = value.id;
            locationName.value = value.name;


            itempopularProvider.paramHolder.itemLocationTownship = '';
            itempopularProvider.paramHolder.itemLocationTownshipName = '';
            itemrecentProvider.paramHolder.itemLocationTownship = '';
            itemrecentProvider.paramHolder.itemLocationTownshipName = '';

            blogProvider.paramHolder.locationId = locationId.value;
            psValueHolder.replaceLocation(value.id, value.name, value.lat, value.lng);

            itempopularProvider.paramHolder.itemLocationId = value.id;
            itemrecentProvider.paramHolder.itemLocationId = value.id;

            itempopularProvider.paramHolder.lat = '';
            itempopularProvider.paramHolder.lng = '';
            itemrecentProvider.paramHolder.lat = '';
            itemrecentProvider.paramHolder.lng = '';

            ps_loading_dialog.value.openModal();
            await itempopularProvider.resetProductList(loginUserId, itempopularProvider.paramHolder);
            await itemrecentProvider.resetProductList(loginUserId, itemrecentProvider.paramHolder);
            await blogProvider.resetBlogList(loginUserId, blogProvider.paramHolder);
            ps_loading_dialog.value.closeModal();

        }

        async function subLocationFilterClicked(value ) {
            PsUtils.log(value);
            locationId.value = value.id;
            locationName.value = value.name;

            itempopularProvider.paramHolder.itemLocationTownship = value.subId;
            itempopularProvider.paramHolder.itemLocationTownshipName = value.subName;
            itemrecentProvider.paramHolder.itemLocationTownship = value.subId;
            itemrecentProvider.paramHolder.itemLocationTownshipName = value.subName;

            itempopularProvider.paramHolder.itemLocationId = value.id;
            itemrecentProvider.paramHolder.itemLocationId = value.id;


            ps_loading_dialog.value.openModal();
            await itempopularProvider.resetProductList(loginUserId, itempopularProvider.paramHolder);
            await itemrecentProvider.resetProductList(loginUserId, itemrecentProvider.paramHolder);
            ps_loading_dialog.value.closeModal();

        }


        function filterKeywordUpate(value) {
            itemlocationProvider.filterKeywordUpate(value,loginUserId, paramHolder);
        }

        return {
            categoryProvider,
            PsCoreAuth,
            itempopularProvider,
            itemFollowerProvider,
            itemrecentProvider,
            PsValueProvider,
            blogProvider,
            itemlocationProvider,
            searchKeyword,
            searchClicked,
            locationName,
            locationId,
            loadLocationList,
            locationFilterClicked,
            recentParams,
            popularParams,
            filterKeywordUpate,
            locationKeyword,
            ps_loading_dialog,
            ps_confirm_dialog,
            subLocationFilterClicked,
        t
        };
    },
};
</script>
