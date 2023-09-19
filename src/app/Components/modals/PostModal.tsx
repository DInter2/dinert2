'use client'
import Modal from "./Modal";
import usePostModal from "../client/hooks/usePostModal";

const PostModal = () => {
  const PostModal = usePostModal();
  const bodyContent = (
    <div className="">

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
      onSubmit={() => { }}
      body={bodyContent}
      footer={footerContent}
    />
  );
}

export default PostModal;
