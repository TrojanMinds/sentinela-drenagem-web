"use client";
import { signOut } from "next-auth/react";
import React from "react";

function ButtonSignOut() {
  return (
    <button
      onClick={() => signOut()}
      className="font-Anton scale-95 rounded-full bg-ButtonBlue px-4 py-2 text-xl font-semibold text-white opacity-50 transition-all hover:scale-100 hover:opacity-100"
    >
      Sign Out
    </button>
  );
}

export default ButtonSignOut;
