'use client'
import { signIn } from 'next-auth/react';
import React, { useEffect } from 'react'
import Loading from '../loading';

const NotAutarized = () => {
  useEffect(() => {
    (async () =>{
      await signIn('google');
    })();
  },)


  return (
    <Loading />
  )
}

export default NotAutarized
