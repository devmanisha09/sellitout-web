import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import VueLazyLoad from 'vue3-lazyload';
import './css/app.css';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import MapWithPinPicker from '@/components/layouts/map/MapWithPinPicker.vue';
import { productProviderSymbol, createProductProviderState } from './store/modules/item/ProductProvider';
import { popularItemProviderSymbol, createPopularItemProviderState } from './store/modules/item/PopularItemProvider';
import { recentItemProviderSymbol, createRecentItemProviderState } from './store/modules/item/RecentItemProvider';
import { followerItemProviderSymbol,createFollowerItemProviderState } from './store/modules/item/FollowerItemProvider';
import { categoryProviderSymbol, createCategoryProviderState } from './store/modules/category/CategoryProvider';
import { featuredItemProviderSymbol, createFeaturedItemProviderState } from './store/modules/item/FeaturedItemProvider';
import { blogProviderSymbol, createBlogProviderState } from './store/modules/blog/BlogProvider';
import { userProviderSymbol, createUserProviderState } from './store/modules/user/UserProvider';
import { psValueHolderSymbol, createPsValueHolderState } from './object/core/PsValueHolder';
import { itemLocationProviderSymbol, createItemLocationProviderState } from './store/modules/itemlocation/ItemLocationProvider';
import { i18n }  from './assets/locales/index';
import { appInfoProviderSymbol, createPsAppInfoProviderState } from './store/modules/appinfo/AppInfoProvider';
import { chatHistoryListProviderSymbol, createChatHistoryListProviderState } from './store/modules/chat/ChatHistoryListProvider';
import  firebase  from 'firebase/app';
import PsConfig from './config/PsConfig';

firebase.initializeApp(PsConfig.firebaseConfig);

createApp(App)
    .use(router)
    .use(i18n)
    .use(VueLazyLoad, {
        preLoad: 1.3,
        attempt: 1
    })
    .component('font-awesome-icon', FontAwesomeIcon)
    .component('map-with-pin-picker', MapWithPinPicker)
    .provide(psValueHolderSymbol, createPsValueHolderState())
    .provide(productProviderSymbol, createProductProviderState())
    .provide(userProviderSymbol, createUserProviderState())
    .provide(popularItemProviderSymbol, createPopularItemProviderState())
    .provide(recentItemProviderSymbol, createRecentItemProviderState())
    .provide(followerItemProviderSymbol, createFollowerItemProviderState())
    .provide(featuredItemProviderSymbol, createFeaturedItemProviderState())
    .provide(categoryProviderSymbol, createCategoryProviderState())
    .provide(blogProviderSymbol, createBlogProviderState())
    .provide(itemLocationProviderSymbol, createItemLocationProviderState())
    .provide(appInfoProviderSymbol, createPsAppInfoProviderState())
    .provide(chatHistoryListProviderSymbol, createChatHistoryListProviderState())
    .mount('#app')

