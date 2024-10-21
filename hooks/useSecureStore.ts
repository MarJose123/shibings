import * as SecureStore from 'expo-secure-store';

export const useSecureStore = () => {

    const save = async (key: any, value: any) => {
        await SecureStore.setItemAsync(key, value);
    }

    return {
        save,
    }
}
