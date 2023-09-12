import { create } from "zustand";

interface PostModalState {
  isOpen: boolean;
  onOpen: (post: {title: string, content: string}) => void;
  onClose: () => void;
  post:  {title: string, content: string}
}

const usePostModal = create<PostModalState>((set) => ({
  isOpen: false,
  onOpen: (post) => set({ isOpen: true, post }),
  onClose: () => set({ isOpen: false }),
  post: {content: "", title: ""}
}));

export default usePostModal;