
import { reactive, provide, inject, ref } from 'vue';
import { PsProvider } from '../core/PsProvider';
import PsApiService from '@/api/PsApiService';
import PsResource from '@/api/common/PsResource';
import ProductParameterHolder from '@/object/holder/ProductParameterHolder';
import UserUnReadMessage from '@/object/UserUnReadMessage';

export class UserUnReadMessageProvider extends PsProvider {

    buyingitemList = reactive<PsResource<UserUnReadMessage>>(new PsResource());

    loading = reactive({
        value: false
    });

    limit: Number = 30;
    offset: Number = 0;


    async postUserUnreadMessageCount(holder: ProductParameterHolder) {

        this.loading.value = true;

        await PsApiService.postUserUnreadMessageCount<UserUnReadMessage>(new UserUnReadMessage(), holder.toMap());

        this.loading.value = false;

    }

}

export const userUnReadMessageProviderSymbol = Symbol('UserUnReadMessageProvider')
export const createUserUnReadMessageProviderState = () => {
    return reactive(new UserUnReadMessageProvider())
}

export const useUserUnReadMessageProviderState = () => inject(userUnReadMessageProviderSymbol) as UserUnReadMessageProvider
export const provideUserUnReadMessageProviderState = () => provide(
    userUnReadMessageProviderSymbol,
    createUserUnReadMessageProviderState()
)