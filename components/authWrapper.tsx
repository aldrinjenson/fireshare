import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";

const AuthWrapper = ({ children }) => {
  const router = useRouter();

  return (
    <div className='flex flex-wrap'>
      <div className='left-content '>
        <img
          src='/firebg.jpg'
          alt='fire bg'
          style={{ opacity: 0.8, width: "60vw", height: "100vh" }}
        />
      </div>
      <div className='p-3'>{children}</div>
    </div>
  );
};

export default AuthWrapper;
