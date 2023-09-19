import { create } from "zustand";

interface MenuDrawerState {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  
}

const useMenuDawer = create<MenuDrawerState>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
  post: {content: "", title: ""}
}));

export default useMenuDawer;