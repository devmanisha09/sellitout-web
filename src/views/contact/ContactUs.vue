<template>
    <ps-content-container>
        <template #content>
            <div class="mt-36 mb-16">
                <div class="flex flex-col items-center mt-16 ">
                    <ps-label-header-4 class=" mb-4 font-medium"> {{ $t("contact_us__contact_us") }} </ps-label-header-4>
                </div>
                <div class="lg:w-3/5 sm:w-4/5 w-full flex flex-col mx-auto  m-auto rounded-lg">
                    <div class="flex flex-wrap mt-2">
                        <div class="flex flex-auto sm:w-6/12 w-full">
                    
                            <div class="flex flex-col w-full">
                                <ps-label class="mt-4 mx-8"> {{ $t("contact_us__contact_name") }} </ps-label>
                                <ps-input class=" mt-2 mx-8"  type="text" v-bind:placeholder="$t('contact_us__contact_name')" v-model:value="name"></ps-input>
                            </div>
                        </div>
                        <div class="flex flex-auto w-6/12"> 
                            <div class="flex flex-col w-full">
                                <ps-label class="mt-4 mx-8 "> {{ $t("contact_us__contact_phone") }} </ps-label>
                                <ps-input class="mt-2 mx-8"  type="text" v-bind:placeholder="$t('contact_us__contact_phone')" v-model:value="phone"></ps-input>
                            </div>
                        
                        </div>  
                    </div>
                    
                    <ps-label class="mt-4 mx-8"> {{ $t("contact_us__contact_email") }} </ps-label>
                    <ps-input class="mt-2 mx-8"  type="email" v-bind:placeholder="$t('contact_us__contact_email')" v-model:value="email"></ps-input>
                    
                    <ps-label class="mt-4 mx-8"> {{ $t("contact_us__contact_message") }} </ps-label>
                    <ps-textarea class="mt-2 mx-8"  v-bind:placeholder="$t('contact_us__contact_message')" v-model:value="message"></ps-textarea>

                    <div class="flex flex-col items-center mx-8">
                        <ps-button class="mt-6 w-full sm:w-auto" @click="submitclicked" :disabled="false"> {{ $t("contact_us__submit") }} </ps-button>
                    </div>
                    
                </div>
            </div>
        </template>
    </ps-content-container>
</template>

<script lang="ts">
//Vue
import {ref} from 'vue';

import PsContentContainer from '@/components/layouts/container/PsContentContainer.vue';
import PsLabelHeader4 from '@/components/core/label/PsLabelHeader4.vue';
import PsLabel from '@/components/core/label/PsLabel.vue';
import PsInput from '@/components/core/input/PsInput.vue';
import PsButton from '@/components/core/buttons/PsButton.vue';
import PsTextarea from '@/components/core/textarea/PsTextarea.vue';

import { createContactUsProviderState } from "@/store/modules/contact/ContactUsProvider";

// Params Holders
import ContactUsPrameterHolder from '@/object/holder/ContactUsParameterHolder';

export default {
    name : "ContactView",
    components : {
        PsContentContainer,
        PsLabelHeader4,
        PsLabel,
        PsInput,
        PsButton,
        PsTextarea
    },
    setup() {
     
        // Inject Item Provider
        const contactUsProvider = createContactUsProviderState();

        const paramHolder = new ContactUsPrameterHolder();

        const name = ref('');
        const phone = ref('');
        const email = ref('');
        const message = ref('');

        async function submitclicked() {
            paramHolder.name = name.value;
            paramHolder.phone = phone.value;
            paramHolder.email = email.value;
            paramHolder.message = message.value;
            // contact us
            await contactUsProvider.postContactUs(paramHolder);            
            location.reload();
           
        }

        return {
            contactUsProvider,
            submitclicked,
            name,
            phone,
            email,
            message
        }
    }
}
</script>