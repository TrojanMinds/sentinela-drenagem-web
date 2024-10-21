"use client";
import Link from "next/link";
import React from "react";

function NotSignInPage() {
  return (
    <div className='flex flex-col w-full h-[100vh] text-Yellow text-2xl items-center justify-center bg-BG gap-2'>
        You don&apos;t have access to see this page, please sign in clicking on the Link below:
        <Link href={"/"} className='text-ButtonBlue underline'>Click here to go back</Link>
    </div>
  );
}

export default NotSignInPage;
