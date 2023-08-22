'use client';

import { useState } from "react";
import {
  FieldValues,
  SubmitHandler,
  useForm
} from "react-hook-form";
import { signIn } from 'next-auth/react';
import Modal from "./Modal";
import useLoginModal from "../client/hooks/useLoginModal";
import Heading from "../emptyState/Heading";
import Input from "../Inputs/Input";
import { toast } from "react-hot-toast";
import { useRouter } from 'next/navigation'

const LoginModal = () => {
  const router = useRouter()
  const loginModal = useLoginModal();
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: {
      errors,
    },
  } = useForm<FieldValues>({
    defaultValues: {
      email: '',
      password: ''
    },
  });

  const onSubmit: SubmitHandler<FieldValues> =
  (data) => {
    setIsLoading(true);

    signIn('credentials', {
      ...data,
      redirect: false,
    })
    .then((callback) => {
      setIsLoading(false);

      if (callback?.ok) {
        toast.success('Logged in');
        router.refresh();
        loginModal.onClose();
      }

      if (callback?.error) {
        toast.error(callback.error);
      }
    });
  }

  const bodyContent = (
    <div className="flex flex-col gap-4">
      <Heading
        title="Bem-vindo"
        subtitle="Faça login na sua conta!"
      />
      <Input
        id="email"
        label="Email"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <Input
        id="password"
        label="Password"
        type="password"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
    </div>
  )

  const footerContent = (
    <div className="flex flex-col gap-4 mt-3">
      <hr />
      <div className="
      text-neutral-500 text-center mt-4 font-light">
        <p>Ainda não tem conta?
          <span
            className="
              text-neutral-800
              cursor-pointer
              hover:underline
            "
            > Entre em contato com a DInter2</span>
        </p>
      </div>
    </div>
  )

  return (
    <Modal
      disabled={isLoading}
      isOpen={loginModal.isOpen}
      title="Login"
      actionLabel="Continue"
      onClose={loginModal.onClose}
      onSubmit={handleSubmit(onSubmit)}
      body={bodyContent}
      footer={footerContent}
    />
  );
}

export default LoginModal;
