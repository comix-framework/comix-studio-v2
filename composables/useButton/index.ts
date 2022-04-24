import {useState} from "#imports";

export type BaseButtonCallback = () => Promise<void>;

export const useButton = (callback: BaseButtonCallback) => {

    const isLoading = useState<boolean>('isLoading', () => false);

    const onClick = async () => {
        isLoading.value = true;
        await callback()
        isLoading.value = false
    }

    return {
        isLoading,
        onClick
    }

}
