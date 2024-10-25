import * as SecureStore from "expo-secure-store";
import * as _ from "lodash";

export const useSecureStore = () => {
  const save = async (key: any, value: any) => {
    await SecureStore.setItemAsync(key, value);
  };

  const get = async (key: any) => {
    return await SecureStore.getItemAsync(key);
  };

  const remove = async (key: any) => {
    await SecureStore.deleteItemAsync(key);
  };

  const deleteAll = async (key: string[]) => {
    _.forEach(key, async (value: any) => {
      await SecureStore.deleteItemAsync(value);
    });
  };

  return {
    save,
    get,
    remove,
    deleteAll,
  };
};
