"use client";
import { signOut } from 'next-auth/react'
import React from 'react'

function ButtonSignOut() {
  return (
    <button onClick={() => signOut()} className='px-4 text-white font-Anton font-semibold opacity-50 hover:opacity-100 transition-all hover:scale-100 scale-95 py-2 rounded-full bg-ButtonBlue text-xl'>Sign Out</button>
  )
}

export default ButtonSignOut