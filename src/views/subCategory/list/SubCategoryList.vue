<template>
    <div class="mt-36 w-mobile sm:w-median lg:w-large mx-auto">
        <div class=" mb-4 flex items-center mt-24"> 
            <ps-route-link :to="{name: 'category-list'}">
                <ps-label
                    class="hover:underline cursor-pointer font-medium"> 
                        {{ $t("sub_category_list__category") }} 
                </ps-label>
            </ps-route-link>
            

            <ps-icon name="rightArrow" class='mx-2'/>

            <ps-label class="font-light"> {{ $t("sub_category_list__sub_category") }} </ps-label>
            
        </div>
        <!-- subcategory list -->
        <div class="flex flex-col ">
            <div class="flex flex-col items-start mt-2 ">
                <ps-route-link
                    :to="{name: 'item-list', 
                    query: { 
                    catId: catId, 
                    catName: catName } }"> 
                    <ps-label-header-4  
                    class="hover:bg-primary-000 dark:hover:bg-primaryDark-black cursor-pointer border border-primary-500 dark:border-primaryDark-accent rounded-md px-2 "> 
                            {{ catName }}
                    </ps-label-header-4>      
                </ps-route-link> 
                
            </div>
            <div class="flex flex-row mb-8 ">
                <div class='w-full flex flex-col' >
                    <div class="grid lg:grid-cols-12 sm:grid-cols-6 grid-cols-4  gap-2 sm:gap-3.5 lg:gap-4 sm:mt-4 mt-2 gap-y-4 ">

                        <!-- Column -->
                        <div class="w-full lg:col-span-2  col-span-1" v-for="subCategory in subCategoryProvider.subCategoryList.data" :key="subCategory.id">
                            <ps-route-link :to="{ 
                                name: 'item-list',
                                query: { 
                                    catId: catId, 
                                    catName: catName,
                                    subCatId: subCategory.id,
                                    subCatName: subCategory.name }  }">
                            <sub-category-horizontal-item :subCategory="subCategory" />
                            </ps-route-link>
                        </div>
                        <!-- END Column -->

                    </div>

                    <ps-button v-if="subCategoryProvider.loading.value == false" class="w-60 mx-auto mt-8" @click="loadMore" :class="subCategoryProvider.isNoMoreRecord ? 'hidden' : ''"> {{ $t("sub_category_list__load_more") }} </ps-button>
                    <ps-button v-else class="w-60 mx-auto mt-8" @click="loadMore" :disabled="true"> {{ $t("sub_category_list__loading") }} </ps-button>

                </div>

            </div>
        </div>
    </div>
</template>

<script lang="ts">

import router from '@/router';
import { useRoute } from 'vue-router';

import PsButton from '@/components/core/buttons/PsButton.vue';
import PsLabel from '@/components/core/label/PsLabel.vue';
import PsLabelHeader4 from '@/components/core/label/PsLabelHeader4.vue';
import PsIcon from '@/components/core/icons/PsIcon.vue';
import SubCategoryHorizontalItem from '@/components/modules/subCategory/SubCategoryHorizontalItem.vue';
import PsRouteLink from '@/components/core/link/PsRouteLink.vue';

import { createSubCategoryProviderState } from '@/store/modules/subCategory/SubCategoryProvider';

export default {
    name: 'SubCategoryListView',
    components : {
        PsButton,
        PsLabel,
        PsLabelHeader4,
        SubCategoryHorizontalItem,
        PsIcon,
        PsRouteLink

    },
    setup (){
        
        const route = useRoute();
        const catId = route.params.catId.toString();
        const catName = route.params.catName.toString();

        const subCategoryProvider = createSubCategoryProviderState();

        subCategoryProvider.loadSubCategoryList(catId);      
        
        function loadMore() {             
            subCategoryProvider.loadSubCategoryList(catId);
        }


        function categoryClick(){
            router.push({
                name: "category-list"
            });
        }

        return {
            subCategoryProvider,
            loadMore,
            categoryClick,
            catId,
            catName,

        }
    }
    
}
</script>