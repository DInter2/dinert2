import { auth } from "firebase-admin";
import { cookies } from "next/headers";


export default async function getCurrentUser() {
  try {
    const session =  cookies().get("session")?.value || "";
    if(!session!){
      return null;
    }

    const decodedClaims = await auth().verifyIdToken(session);
    if (!decodedClaims!) {
      return null;;
    }
    return {
      email: decodedClaims.email
    };
  } catch (error: any) {
    console.log(error)
    return null;
  }
}
