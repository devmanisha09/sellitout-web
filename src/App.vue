
<style>
/* @import "css/app.css"; */

.fade-enter,
.fade-leave-to
 {
  opacity: 0;
}

.fade-enter-to,
.fade-leave {
    opacity: 1;
}

</style>

<template>
    <metainfo>
        <template v-slot:title="{ content }">{{ content ? `${content}` : `` }}</template>
    </metainfo>
    <header />
    <div class='bg-background dark:bg-backgroundDark h-full'>
    <div id="app" :dir='psValueHolder.languageCode == "ar" ? "rtl" : "ltr" ' class="  w-full h-full flex flex-col min-h-screen ">

        <!-- Nav Bar -->
        <ps-nav-tab-bar  :topOfPage="atTopOfPage" />
        <ps-nav-bar  :topOfPage="atTopOfPage" />
        <!-- End Nav Bar -->

        <!-- Body --> 
        <main class="flex-grow">
            <router-view v-slot="{ Component }">
               <transition 
                name="slide-fade" 
                mode="out-in"
                appear
                >
                    <div>
                        <component :is="Component" />
                    </div>
                </transition>
            </router-view>
        </main> 
        <!-- End Body -->

        <!-- Footer -->
        <footer>
            <footer-view />
        </footer>
        <!-- End Footer -->
        

        </div>
    </div>
</template>

<script lang="ts">

// libs
import { defineComponent, onMounted , onUnmounted, ref} from 'vue';
import { useRoute } from 'vue-router';
import { i18n } from '@/assets/locales/index';

// Providers
import { PsValueProvider } from './store/modules/core/PsValueProvider';
import { usePsAppInfoProviderState } from './store/modules/appinfo/AppInfoProvider';

// Holders
import { usePsValueHolderState } from '@/object/core/PsValueHolder';
import AppInfoParameterHolder from './object/holder/AppInfoParameterHolder';

// Components
import FooterView from '@/views/general/FooterView.vue';
import PsNavTabBar from '@/components/layouts/navbar/PsNavTabBar.vue';
import PsNavBar from '@/components/layouts/navbar/PsNavBar.vue';
import PsIcon from './components/core/icons/PsIcon.vue';

export default defineComponent({
    name : "AppView",
    components: {
        PsNavBar,
        FooterView,
        PsIcon,
        PsNavTabBar
    },
  
    setup() {
    
        PsValueProvider.psValueHolder = usePsValueHolderState();
        const appInfoProvider = usePsAppInfoProviderState();
        const atTopOfPage = ref(true);
        const route = useRoute();
        const showEntryMessage = ref(true);
        const psValueHolder = PsValueProvider.psValueHolder;
        const loginUserId = psValueHolder.getLoginUserId();

        function handleScroll(){
            // when the user scrolls, check the pageYOffset
            if(window.pageYOffset>30){
                // user is scrolled
                if(atTopOfPage.value) atTopOfPage.value = false;
            }else{
                // user is at top of page
                if(!atTopOfPage.value) atTopOfPage.value = true;
            }
        }

        onMounted(() =>{
            window.addEventListener('scroll', handleScroll);
            document.title = i18n.global.t('ps_nav_bar__ps_buy_sell');

            const appInfoParameterHolder = new AppInfoParameterHolder();
            appInfoParameterHolder.userId = loginUserId;
            appInfoProvider.loadDeleteHistory(appInfoParameterHolder);
        })

        onUnmounted(() => {
            window.removeEventListener('scroll', handleScroll);
        })

        

        return {
            atTopOfPage,
            route,
            showEntryMessage,
            psValueHolder
        }
    }

})

</script>

