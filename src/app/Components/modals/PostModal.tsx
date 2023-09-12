'use client'
import Modal from "./Modal";
import usePostModal from "../client/hooks/usePostModal";
import { ClientMarkdown } from "@/app/[maneName]/[menuId]/components/clientMarkdown";
import MarkdownView from "react-showdown";
import { IconForm,  IconDoc, IconSheet, IconExcel, IconWord } from "@/app/Components/widgets/icons";
import Carousel from "../widgets/carossel";

const PostModal = () => {
  const PostModal = usePostModal();
  const bodyContent = (
    <div className="">
    <ClientMarkdown>
        <MarkdownView
          className="max-w-full overflow-x-auto scrollbar-thin markdown min-w-full md:px-16"
          markdown={PostModal.post.content}
          options={{ tables: true, emoji: true, }}
          components={{ IconForm, IconDoc, IconSheet, IconExcel, IconWord, Carousel }}
          />
      </ClientMarkdown>
    </div>
  )

  const footerContent = (
    <div className="flex flex-col gap-4 mt-3">
      
    </div>
  )

  return (
    <Modal
      isOpen={PostModal.isOpen}
      title={PostModal.post.title}
      onClose={PostModal.onClose}
      onSubmit={()=>{}}
      body={bodyContent}
      footer={footerContent}
    />
  );
}

export default PostModal;
