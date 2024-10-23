import { create } from "zustand";

type userType = {
  id?: number;
  avatar?: string;
  name?: string;
  email?: string;
};

export const useSession = create((set) => ({
  user: {
    id: null,
    avatar: null,
    name: null,
    email: null,
  },
  isLogin: false,
  setUser: () => {},
  logout: () => {
    // update store
    set((state: { user: userType }) => ({
      user: { id: null, avatar: null, name: null, email: null },
      isLogin: false,
    }));
  },
  login: () => {},
}));
