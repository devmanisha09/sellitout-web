<template>
    <ps-content-container>
        <template #content>
            <div class='mt-36 mb-16'>
                <ps-label-title> {{ $t("safety__safety_tips") }} </ps-label-title>
                <p class="mt-4">
                    <ps-label v-html="aboutUsProvider.aboutus?.data?.safetyTips"> </ps-label>
                </p>
            </div>
        </template>
    </ps-content-container>
</template>

<script lang="ts">
import PsContentContainer from '@/components/layouts/container/PsContentContainer.vue';
import PsLabelTitle from '@/components/core/label/PsLabelTitle.vue';
import PsLabel from '@/components/core/label/PsLabel.vue';

import { createAboutUsProviderState } from "@/store/modules/aboutus/AboutUsProvider";

export default {
    name : "SafetyView",
    components : {
        PsContentContainer,
        PsLabelTitle,
        PsLabel
    },
    setup () {
    
        const aboutUsProvider = createAboutUsProviderState();

        aboutUsProvider.loadAboutUs();

        return {
            aboutUsProvider,
        };
    }
}
</script>