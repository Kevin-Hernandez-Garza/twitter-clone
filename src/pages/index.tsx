import styles from "./index.module.css";
import Head from "next/head";
import Link from "next/link";
import {SignIn, SignInButton, SignOutButton, useUser} from "@clerk/nextjs";
import { type NextPage } from "next";

export default function Home() {

  const user = useUser();


  // FIX
  // data has the correct Post array structure
  const { data } = api.posts.getAll.useQuery();


  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>

        {/* this div is the sign in & out functionality */}
        <div>
          {/* double knot, when there is a user prompt sign-out
          if not sign-in prompt sign-in. */}
          {!user.isSignedIn && <SignInButton />}
          {!!user.isSignedIn && <SignOutButton/>}
        </div>
      <SignIn path="/sign-in" routing="path" signUpUrl="/sign-up" />
      </main>
    </>
  );
}


