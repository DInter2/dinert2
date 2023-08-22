import { auth } from "firebase-admin";

import { getServerSession } from "next-auth/next"

import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { UserRecord } from "firebase-admin/lib/auth/user-record";
import { customInitApp } from "../libs/firebase-admin-config";

export async function getSession() {
  return await getServerSession(authOptions)
}
export type AuthUser =  {
    name: string,
    email: string,
    image: string

} | null;
export default async function getCurrentUser(): Promise<AuthUser> {
  customInitApp();
  try {
    const session = await getSession();

    if (!session?.user?.email) {
      return null;
    }
    const currentUser = await auth().getUserByEmail("cefascavalcanti@gmail.com");
    if (!currentUser.email) {
      return null;
    }
    return {
      email: currentUser.email,
      image: "",
      name : ""
    };
  } catch (error: any) {
    return null;
  }
}
