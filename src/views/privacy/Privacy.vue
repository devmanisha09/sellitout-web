<template>
    <ps-content-container>
        <template #content>
            <div class='mt-36 mb-16 '>
                <ps-label-title> {{ $t("privacy_policy__privacy_policy") }} </ps-label-title>
                <p class="mt-4 ">
                    <ps-label v-html="aboutUsProvider.aboutus?.data?.privacypolicy"> </ps-label>
                </p>
                <div v-if="aboutUsProvider.loading.value == true ">
                <privacy-skeletor />
                </div>                
            </div>
        </template>
    </ps-content-container>
</template>

<script lang="ts">
import { useRoute } from 'vue-router';
import router from '@/router';
import PsContentContainer from '@/components/layouts/container/PsContentContainer.vue';
import PsLabelTitle from '@/components/core/label/PsLabelTitle.vue';
import PsLabel from '@/components/core/label/PsLabel.vue';
import PrivacySkeletor from '@/components/modules/privacy/PrivacySkeletor.vue';

import { createAboutUsProviderState } from "@/store/modules/aboutus/AboutUsProvider";

export default {
    name : "PrivacyView",
    components : {
        PsContentContainer,
        PsLabelTitle,
        PsLabel,
        PrivacySkeletor
    },
    setup () {
       
        const route = useRoute();
        const aboutUsProvider = createAboutUsProviderState();
        const redirect = route.query.redirect?.toString() ?? '';
        aboutUsProvider.loadAboutUs();

        function acceptClicked() {
            router.push({
                name: redirect,
                query: { agreePrivacyPolicy: 1 }
            });
        }

        function rejectClicked() {
            router.push({name: redirect});
        }

        return {
            aboutUsProvider,
            acceptClicked,
            rejectClicked
        };
    }
}
</script>