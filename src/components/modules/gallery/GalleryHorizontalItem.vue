<template>

    <div class='w-screen bg-primary-000 dark:bg-primaryDark-black overflow-hidden rounded-xl  h-56 flex flex-row justify-center items-center'  >         
        <div v-if="gallery.imgType == 'video-icon' " class=' relative w-full h-full' >
            
            <div class="absolute opacity-90 w-full h-56">
                <img id="slider-full" alt="Placeholder" width="400px" height="400px" class=" w-full h-56 object-contain " 
                    :class="customClass " label="Image 1" 
                    v-if="gallery != null && gallery.imgPath != null" 
                    :src="galleryProvider.imageUrl(gallery ? gallery.imgPath : '')"  
                    @error="galleryProvider.defaultCarImage" >
            </div>
            <div class="relative mx-auto mt-24">
                <font-awesome-icon :icon="['fas', 'play']" class="text-primary-000 dark:text-primaryDark-accent text-3xl"  />
            </div>
            
        </div>
        <div v-else class='  w-full h-full ' >
            
            <img id="slider-full" alt="Placeholder" width="400px" height="400px" class="w-full h-56 object-contain   " 
                :class="customClass " label="Image 1" 
                v-if="gallery != null && gallery.imgPath != null" 
                :src="galleryProvider.imageUrl(gallery ? gallery.imgPath : '')"  
                @error="galleryProvider.defaultCarImage" >
            
        </div>
        
    </div>
</template>
<script lang="ts">

import { createGalleryProviderState } from '@/store/modules/gallery/GalleryProvider';
import { defineComponent } from "vue";
import DefaultPhoto from "@/object/DefaultPhoto";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
library.add(faPlay)

export default defineComponent ({    
    name : "GalleryHorizontalItem",
    components: { 

    },
    props : {
        gallery : { type : DefaultPhoto,
                    default: new DefaultPhoto
         } ,
        customClass : {
            type : String,
            default : ' h-64 object-contain'
        }
    },
    setup() {

        // Inject Provider
        const galleryProvider = createGalleryProviderState();
                

        return {
            galleryProvider

        }

    }
});
</script>