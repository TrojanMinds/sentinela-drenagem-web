"use client";
import React from 'react'
import Nav from './nav';
import Image from 'next/image';

function SwithClient() {
    const [Selected, ChangeSeleted] = React.useState(0)

  return (
    <div className='flex min-h-screen flex-col items-center bg-BG px-4'>
        <Nav func={ChangeSeleted} selected={Selected}/>
        <Image src={"/pngs/background.png"} width={5000} height={5000} alt='background' className='absolute w- top-0 object-contain'/>
        <div className='h-[100vh] w-full z-[10] flex flex-col items-center pt-[20%]'>
            <p className='font-Anton text-[5em] text-white font-bold tracking-wider'>Sentinela de Drenagem</p>
        </div>
        <div className='w-full h-[100vh] absolute top-0 bg-gradient-to-tl from-transparent to-BG/50'/>
    </div>
  )
}

export default SwithClient