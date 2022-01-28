<template>
    <div class="mt-36 w-mobile sm:w-median lg:w-large mx-auto">
        <div>
        <!-- category list -->
        <div class="flex flex-col mb-4">
            <div class="flex flex-col items-start mt-2">
                <ps-label-header-4 class="font-medium"> {{ $t("category_list__title") }} </ps-label-header-4>
                <ps-label class="mt-2 text-center "> {{ $t("category_list__text") }} </ps-label>
            </div>
            <div class="flex flex-row mb-8 mt-4">
                <div class='w-full ' >
                    <div class="grid lg:grid-cols-12 sm:grid-cols-6 grid-cols-4  gap-2 sm:gap-3.5 lg:gap-4 mt-6 gap-y-4 ">

                        <!-- Column -->
                        <div class="w-full lg:col-span-2  col-span-1" v-for="category in categoryProvider.itemList.data" :key="category.catId">
                            <ps-route-link
                                :to="{name: 'sub-category-list', 
                                params: {catId: category.catId , catName: category.catName} }"> 
                                <category-horizontal-item  :category="category" />
                            </ps-route-link> 
                        </div>
                        <!-- END Column -->

                    </div>

                    <ps-button v-if="categoryProvider.loading.value == false" class="w-60 mx-auto mt-8" @click="loadMore" :class="categoryProvider.isNoMoreRecord ? 'hidden' : ''"> {{ $t("category_list__load_more") }} </ps-button>
                    <ps-button v-else class="w-60 mx-auto mt-8" @click="loadMore" :disabled="true"> {{ $t("category_list__loading") }} </ps-button>
                </div>
            </div>
        </div>
        <!-- End category List -->
        </div>
    </div>
</template>

<script lang="ts">

import { createCategoryProviderState } from "@/store/modules/category/CategoryProvider";

 import PsRouteLink from '@/components/core/link/PsRouteLink.vue';

import PsButton from '@/components/core/buttons/PsButton.vue';
import PsLabel from '@/components/core/label/PsLabel.vue';
import PsLabelHeader4 from '@/components/core/label/PsLabelHeader4.vue';
import CategoryHorizontalItem from '@/components/modules/category/CategoryHorizontalItem.vue';
import PsConst from '@/object/constant/ps_constants';

export default {
    name: 'CategoryListView',
    components : {
        PsButton,
        PsLabel,
        PsLabelHeader4,
        CategoryHorizontalItem,
        PsRouteLink,

    },
    setup (){
       
        const categoryProvider = createCategoryProviderState();
        
        categoryProvider.loadItemList(PsConst.NO_LOGIN_USER, categoryProvider.paramHolder);

        function loadMore() {  
            categoryProvider.loadItemList(PsConst.NO_LOGIN_USER, categoryProvider.paramHolder);
        }

        return {
            categoryProvider,
            loadMore,

        }
    }
    
}
</script>