'use server'

import { auth, signInWithEmailAndPassword } from "../libs/firebase-config";
export async function credentialsLogin({email, password}: {email:string, password: string}) {
  const userCredentials =  await signInWithEmailAndPassword(auth, email, password);
  console.log(userCredentials)
  // @ts-ignore
  // cookies().set('name', '')
}
