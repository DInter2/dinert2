'use server'
import { customInitApp } from "@/app/libs/firebase-admin-config";
import { auth, signInWithEmailAndPassword } from "@/app/libs/firebase-config";
import { cookies} from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import adm from "firebase-admin";

// Init the Firebase SDK every time the server is called
customInitApp();

export async function POST(request: NextRequest, response: NextResponse) {
  // const verifyIdToken = adm.auth().verifyIdToken;

  const createSessionCookie = adm.auth().createSessionCookie;
  const body = await request.json();
  const {
    email,
    password,
   } = body;

   try {
      const userCredentials =  await signInWithEmailAndPassword(auth, email, password);
      const idToken = await userCredentials.user.getIdTokenResult();
      // console.log(idToken.token)

        const options = {
        name: "session",
        value: idToken.token,
        maxAge: idToken.expirationTime,
        httpOnly: true,
        secure: true,
      };
      // @ts-ignore
      cookies().set(options);
     return NextResponse.json({}, { status: 200 });

   } catch  ( error ) {
    console.log(error)
    return NextResponse.json({message: "Error ao autenticar"}, { status: 403 });
   }


  //     const options = {
  //       name: "session",
  //       value: sessionCookie,
  //       maxAge: expiresIn,
  //       httpOnly: true,
  //       secure: true,
  //     };


  //  const authorization = headers().get("Authorization");
  // if (authorization?.startsWith("Bearer ")) {
  //   const idToken = authorization.split("Bearer ")[1];
  //   const decodedToken = await verifyIdToken(idToken);

  //   if (decodedToken) {
  //     //Generate session cookie
  //     const expiresIn = 60 * 60 * 24 * 5 * 1000;
  //     const sessionCookie = await createSessionCookie(idToken, {
  //       expiresIn,
  //     });
  //     const options = {
  //       name: "session",
  //       value: sessionCookie,
  //       maxAge: expiresIn,
  //       httpOnly: true,
  //       secure: true,
  //     };

  //     console.log(options)
  //     //Add the cookie to the browser
  //     // @ts-ignore
  //     cookies().set(options);
  //   }
  // }

}

export async function GET(request: NextRequest) {
  const session = cookies().get("session")?.value || "";

  //Validate if the cookie exist in the request
  if (!session) {
    return NextResponse.json({ isLogged: false }, { status: 401 });
  }

  //Use Firebase Admin to validate the session cookie
  // const decodedClaims = await auth().verifySessionCookie(session, true);

  // if (!decodedClaims) {
  //   return NextResponse.json({ isLogged: false }, { status: 401 });
  // }

  return NextResponse.json({ isLogged: true }, { status: 200 });
}
