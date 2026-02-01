// store/auth.store.ts
import { create } from "zustand";


export const useAuthStore = create((set) => ({
  user: null,
  loading: false,

  login: async (data) => {
    set({ loading: true });
    const user = await loginUser(data);
    set({ user, loading: false });
  },

  logout: () => set({ user: null }),
}));
