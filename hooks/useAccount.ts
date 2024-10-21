import {db} from "@/db/connection/connection";
import {users} from "@/db/model/users";
import * as SecureStore from 'expo-secure-store';
import {useSecureStore} from "@/hooks/useSecureStore";


export const useAccount = () => {

    type AccountType = {
        name: string,
        email: string
        password: string,
    }

    const createAccount = async (props: AccountType) => {
        const result  = await db.insert(users).values({...props}).returning();
        if(result) {
            await useSecureStore().save('userEmail', props.email);
            await useSecureStore().save('userName', props.name);
            await useSecureStore().save('userName', props.password);
            return true;
        }
        return false;
    }

    const loginAccount = () => {}



    return {
        createAccount,
        loginAccount,
    }
}
