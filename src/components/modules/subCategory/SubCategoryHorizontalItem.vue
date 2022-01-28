<template>
    <div class="flex flex-col mt-2 w-full h-auto cursor-pointer" @click="onClick != null ? onClick(subCategory) : null">
        <div class="relative bg-black lg:h-40 sm:h-28 h-20 rounded-md">
            <div class="absolute opacity-50">
                <img alt="Placeholder" width="150px" height="100px" class="w-screen block mx-auto lg:h-40 sm:h-28 h-20 object-cover rounded-md" :src="subCategoryProvider.imageUrl(subCategory ? subCategory.defaultPhoto.imgPath : '') " @error="subCategoryProvider.defaultCarImage">
            </div>
            <div class="mx-auto lg:pt-16 sm:pt-12 pt-10 relative">
                <ps-label class="absolute w-full  lg:text-lg sm:text-sm text-xs text-center leading-4" textColor="text-textLight"> {{subCategory ? subCategory.name : ''}} </ps-label>
            </div>

        </div>    
    </div>
</template>

<script lang="ts">
import { createSubCategoryProviderState } from "@/store/modules/subCategory/SubCategoryProvider";
import { defineComponent } from "vue";
import PsLabel from '@/components/core/label/PsLabel.vue';
import SubCategory from "@/object/SubCategory";

export default defineComponent ({
    name : "CategoryHorizontalItem",
    props : {
        subCategory : { type : SubCategory } ,
        onClick : Function
    },
    components : {
       PsLabel
    },
    setup() {
        // Inject Provider
        const subCategoryProvider = createSubCategoryProviderState();
        
        return {
            subCategoryProvider
        }

    }
});
</script>