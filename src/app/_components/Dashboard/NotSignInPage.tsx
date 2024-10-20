"use client";
import Link from "next/link";
import React from "react";

function NotSignInPage() {
  return (
    <div className="flex h-[100vh] w-full flex-col items-center justify-center gap-2 bg-BG text-2xl text-Yellow">
      You don't have access to see this page, please sign in clicking on the
      Link below:
      <Link href={"/"} className="text-ButtonBlue underline">
        Click here to go back
      </Link>
    </div>
  );
}

export default NotSignInPage;
