import {db} from "@/db/connection/connection";
import {users} from "@/db/model/users";
import {useSecureStore} from "@/hooks/useSecureStore";
import {eq} from "drizzle-orm";



export const useAccount = () => {

    type AccountType = {
        name: string,
        email: string
        password: string,
    }

    type AccountLoginType = {
        email: string,
        password: string
    }

    const createAccount = async (props: AccountType) => {
        const result  = await db.insert(users).values({...props}).returning();
        if(result) {
            await useSecureStore().save('userEmail', props.email);
            await useSecureStore().save('userName', props.name);
            await useSecureStore().save('userPin', props.password);
            return true;
        }
        return false;
    }

    const loginAccount = async (props: AccountLoginType) => {
        const record = await db.select().from(users).where(eq(users.email, props.email))
        console.log(record)
        return false;
    }



    return {
        createAccount,
        loginAccount,
    }
}
