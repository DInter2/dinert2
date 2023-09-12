'use client'
import { create } from "zustand";

interface PostModalState {
  isOpen: boolean;
  onOpen: (post: {title: string, content: string}) => void;
  onClose: () => void;
  post:  {title: string, content: string}
}

const usePostModal = create<PostModalState>((set) => ({
  isOpen: false,
  onOpen: (post) =>{ 
    document.body.style.overflow = 'hidden';
    set({ isOpen: true, post })},
  onClose: () => {
    document.body.style.overflow = 'auto';
    set({ isOpen: false })},
  post: {content: "", title: ""}
}));

export default usePostModal;