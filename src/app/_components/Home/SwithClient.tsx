"use client";
import React from 'react'
import Nav, { NavButtons } from './nav';
import Image from 'next/image';


function HomeCard({
    children, title, imagePath, subtitle, i
  }: Readonly<{ children: React.ReactNode, title: string, imagePath: string, subtitle: string, i: number }>){
    return <div className={`w-[70%] flex items-center justify-between h-[75vh] relative ${i%2==1 && "flex-row-reverse"}`}>
        <div className='relative w-[55%] h-[80%]'>
            <p className='absolute text-white opacity-10 text-[9em] tracking-[-0.1em] font-Anton font-bold top-[-10%]'>0{i+1}</p>
            <div className={`absolute w-[99.5%] h-[99.5%] bg-BG -z-[1] top-[0.25%] right-[0.25%]`}/>
            <div className='absolute w-[30%] h-[80%] bg-BG -z-[1]'/>
            <div className={`absolute w-full h-full bg-Blue/50 -z-[2]`}/>
            <div className='flex flex-col text-white h-[70%] pl-28 pt-16 gap-4 relative w-[90%]'>
                <div className='flex items-center gap-4'>
                    <div className='w-[10%] h-[0.1em] bg-Yellow'/>
                    <p className='uppercase font-Anton font-bold text-Yellow tracking-widest'>{subtitle}</p>
                </div>
                <p className='font-Anton font-bold tracking-[-.07em] text-[4em]'>{title}</p>
                {children}
            </div>
        </div>
        <Image alt={imagePath} src={`/pngs/${imagePath}`} width={1000} height={1000} className='object-cover w-[40%] h-[90%] rounded-sm'/>
    </div>
}

interface DataSelection {
    imagePath: string,
    html: React.ReactNode,
    title: string, subtitle: string
}

const DataForSelected: DataSelection[][] = [
    [],
    [],
    [
        {title: "Problema", subtitle: "causa", imagePath: "H1.png",
            html: <div>  A falta de manutenção adequada nos sistemas de drenagem urbana, aliada à obstrução dos bueiros e canais, é um fator que intensifica o risco de enchentes em áreas urbanas.
            Problemas de drenagem frequentemente passam despercebidos até o momento crítico, quando as chuvas intensas resultam em alagamentos, causando prejuízos econômicos e sociais.
            Com as mudanças climáticas, o aumento na frequência de chuvas intensas e imprevisíveis torna ainda mais urgente a necessidade de monitorar as redes de drenagem.</div>},
        {title: "Problema", subtitle: "causa", imagePath: "H1.png",
            html: <div>AAA</div>},
    ],
    [],
    []
]

function SwithClient() {
    const [Selected, ChangeSeleted] = React.useState(0)

  return (
    <div className='flex min-h-screen flex-col items-center bg-BG px-4'>
        <Nav func={ChangeSeleted} selected={Selected}/>
        <Image src={"/pngs/background.png"} width={5000} height={5000} alt='background' className='absolute w- top-0 object-contain'/>
        <div className='h-[100vh] w-[60%] z-[10] flex flex-col items-center pt-[20%] relative mb-[10%]'>
            <div>
                <div className='w-full flex items-center gap-4'>
                    <div className='w-[8%] h-[0.2em] bg-Yellow'/>
                    <p className='tracking-widest font-bold font-Aton text-Yellow'>
                        {NavButtons[Selected]}
                    </p>
                </div>
                <p className='font-Alfa text-[5em] text-white font-bold tracking-wider'>Sentinela de Drenagem</p>
            </div>
        </div>
        <div className='w-full h-[100vh] absolute top-0 bg-gradient-to-tl from-transparent via-transparent to-BG/80'/>
        <div className='w-full h-[100vh] absolute bottom-[-30%] bg-gradient-to-b from-transparent to-BG'/>
        <div className='bg-BG absolute w-full h-[70vh] bottom-[-100%]'/>

        <div className='z-10 w-full flex flex-col items-center justify-center gap-[10em]'>
            {DataForSelected[Selected]?.map((obj, i) => HomeCard({children: obj.html, ...obj, i}) )}
        </div>
    </div>
  )
}

export default SwithClient