<!--<template>

    <nav class="flex fixed w-full h-8 lg:h-12 bg-secondary-900 "
        :class="navStyle">

        <div class="flex flex-wrap justify-end items-center content-center text-textLight dark:text-textDark text-base w-mobile sm:w-median lg:w-large mx-auto" >

            <div class="">

                <ps-dropdown align="right" h="h-72" class='' >
                    <template #select >
                        <ps-label class="rounded-md shadow-sm h-full">
                            <button
                                type="button"
                                class="inline-flex items-center content-start justify-between w-full h-12
                                            leading-5 font-medium text-base
                                            focus:outline-none transition
                                            ease-in-out duration-150 btn-focus"

                                :id="activeLanguage.name"
                                aria-haspopup="true"
                                aria-expanded="true" >

                                <img  :src="activeLanguage.flag" :alt="activeLanguage.name"  width="35px" height="35px" class="me-1 w-auto h-4 cursor-pointer object-cover "/>
                                <ps-icon name="downArrow" class="text-textLight" w='24' h='24' />

                            </button>
                        </ps-label>
                    </template>
                    <template #list >
                        <div
                            class="rounded-md bg-white shadow-xs w-56 "
                            role="menu"
                            aria-orientation="vertical"
                            aria-labelledby="options-menu">
                            <div class="pt-2 z-30 absolute">
                                <div
                                v-for="language in supportedLanguages" :key="language.languageCode"
                                textSize="text-sm">
                                    <div v-if="language.languageCode == activeLanguage.languageCode" :id="language.name" class="w-56 py-4 px-2 cursor-pointer flex flex-row items-center"  >
                                        <img :src="language.flag" :alt="language.name"  width="35px" height="35px" class="mx-4 w-auto h-6 cursor-pointer object-cover "/>
                                        <ps-label class="font-medium">{{ language.name }} </ps-label>
                                    </div>
                                    <div v-else @click="changeLanguage(language)" :id="language.name" class="font-light w-56 py-4 px-2 hover:bg-primary-000 dark:hover:bg-primaryDark-black cursor-pointer flex flex-row items-center"  >
                                        <img :src="language.flag" :alt="language.name"  width="35px" height="35px"  class="mx-4 w-auto h-4 cursor-pointer object-cover "/>
                                        <ps-label>{{ language.name }} </ps-label>

                                    </div>
                                </div>
                            </div>

                        </div>
                    </template>
                </ps-dropdown>
            </div>
            <ps-label v-on:click="toggleDarkMode"
                class="cursor-pointer flex flex-row">
                    <div class="mx-2">
                        <ps-label class="text-xs lg:sm" textColor="text-textLight font-medium">Dark Mode</ps-label>
                    </div>
                    <div class="my-auto">
                        <img v-if="isDarkMode" src="@/assets/images/toggle_on.png" width="35px" height="35px" alt='toggle on' class="w-auto h-4 cursor-pointer object-cover "/>
                        <img v-else src="@/assets/images/toggle_off.png" width="35px" height="35px" alt='toggle off' class="w-auto h-4 cursor-pointer object-cover "/>
                    </div>

            </ps-label>

        </div>
    </nav>
</template>-->

<script lang="ts">
import { defineComponent, ref,watch } from "vue";

import PsIcon from '@/components/core/icons/PsIcon.vue';
import PsDropdown from '@/components/core/dropdown/PsDropdown.vue';

import PsConfig from '@/config/PsConfig';
import PsLabel from "@/components/core/label/PsLabel.vue";
import $ from "cash-dom";
import { useI18n } from 'vue-i18n';
import { i18n } from '@/assets/locales/index';
import { PsValueProvider } from "@/store/modules/core/PsValueProvider";


export default defineComponent ({
    components : {
        PsIcon,
        PsDropdown,
        PsLabel,
    },
    props : {
        topOfPage : {
            type : Boolean,
            default : false
        }
    },
    setup(props) {

        var psValueHolder = PsValueProvider.psValueHolder;
        var supportedLanguages = PsConfig.supportedLanguages;
        var activeLanguage = ref();
        if(psValueHolder.languageCode == '' || psValueHolder.languageCode== undefined){
            activeLanguage.value =  PsConfig.defaultLanguage;
       }else{
            for(var lan of supportedLanguages){
                if(lan.languageCode == psValueHolder.languageCode){
                    activeLanguage.value =  lan;
                }

            }
        }
        const navStyle = ref('');

        watch(() => psValueHolder.modal, () => {

                styleChanged();
        })
        watch(() => props.topOfPage, () => {

                styleChanged();
        })

        function styleChanged(){
            if(props.topOfPage && psValueHolder.modal == 'true'){
                navStyle.value = ''
            }else if(props.topOfPage && psValueHolder.modal == 'false'){
                navStyle.value = ' z-40'
            }else if(!props.topOfPage && psValueHolder.modal == 'true'){
                navStyle.value = 'hidden '
            }else{
                navStyle.value = 'hidden z-40'
            }

        }
        //light / dark mode
        const isDarkMode = ref(true);
        function toggleDarkMode() {

            if(localStorage.isDarkMode != null && localStorage.isDarkMode == 'true') {
                localStorage.isDarkMode = 'false';
                isDarkMode.value = false;
            }else {
                localStorage.isDarkMode = 'true';
                isDarkMode.value = true;
            }
            loadIsDarkMode();
        }

        loadIsDarkMode();
        function loadIsDarkMode() {
            if(localStorage.isDarkMode != null && localStorage.isDarkMode == 'true') {
                $("html").addClass("dark");
                isDarkMode.value = true;
            }else {
                $("html").removeClass("dark");
                isDarkMode.value = false;
            }
        }
        //language selection
        const t = useI18n;
        function changeLanguage(language){
            // PsConfig.defaultLanguage = language;
            psValueHolder.replacelanguageCode(language.languageCode);
            i18n.global.locale = language.languageCode;
            i18n.global.fallbackLocale = language.languageCode;
            activeLanguage.value = language;
        }

        return {
            isDarkMode,
            toggleDarkMode,
            activeLanguage,
            supportedLanguages,
            changeLanguage,
            t,
            navStyle
        }

    }
});
</script>
