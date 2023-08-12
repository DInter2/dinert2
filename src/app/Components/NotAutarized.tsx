'use client'
import React, { useEffect } from 'react'
import Loading from '../loading';
import { useRouter } from 'next/navigation'

const NotAutarized = () => {
  const router = useRouter()
  useEffect(() => {
    (async () =>{
      router.push("/");
    })();
  },)


  return (
    <Loading />
  )
}

export default NotAutarized
