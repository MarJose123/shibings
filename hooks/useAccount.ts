import { db } from "@/db/connection/connection";
import { users } from "@/db/model/users";
import { useSecureStore } from "@/hooks/useSecureStore";
import { eq } from "drizzle-orm";

export const useAccount = () => {
  const secureStore = useSecureStore();
  type AccountType = {
    name: string;
    email: string;
    password: string;
  };

  type AccountLoginType = {
    email: string;
    password: string;
  };

  const createAccount = async (props: AccountType) => {
    try {
      await db.delete(users);
      const result = await db
        .insert(users)
        .values({ ...props })
        .onConflictDoUpdate({
          target: users.id,
          set: { ...props },
        })
        .returning();
      console.log(result);
      if (result.length > 0) {
        await secureStore.save("userEmail", props.email);
        await secureStore.save("userName", props.name);
        await secureStore.save("userPin", props.password);
        return { success: true };
      }
      return { success: false, error: result };
    } catch (e) {
      return { success: false, error: e };
    }
  };

  const loginAccount = async (props: AccountLoginType) => {
    try {
      const record = await db
        .select()
        .from(users)
        .where(eq(users.email, props.email));
      if (record.length > 0 && record[0].password === props.password) {
        await secureStore.save("userEmail", record[0].email);
        await secureStore.save("userName", record[0].name);
        await secureStore.save("userPin", record[0].password);
        return { success: true };
      } else {
        return { success: false };
      }
    } catch (error) {
      console.error(error);
      return { success: false, error: error };
    }
  };

  return {
    createAccount,
    loginAccount,
  };
};
