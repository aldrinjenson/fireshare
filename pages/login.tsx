import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import AuthWrapper from "../components/authWrapper";

const Login: NextPage = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = () => {
    return alert("Firebase login to be implemented :)");
  };
  return (
    <AuthWrapper>
      <div className=''>
        <Head>
          <title>Create Next App</title>
          <meta name='description' content='Generated by create next app' />
          <link rel='icon' href='/favicon.ico' />
        </Head>
        <div className='text-center'>
          <h3 className='text-bold'>Login</h3>
          <input
            type='text'
            name='email'
            id='email'
            placeholder='Eter email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <input
            type='password'
            name='password'
            id='password'
            value={password}
            placeholder='Eter password'
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button
          onClick={handleSignIn}
          className='p-2 text-bold bg-orange-400 rounded'
        >
          Sign In
        </button>
        <br />
        <Link href='/signup'>
          <a className='text-blue-600 underline'>New User? Create an account</a>
        </Link>
      </div>
    </AuthWrapper>
  );
};

export default Login;
