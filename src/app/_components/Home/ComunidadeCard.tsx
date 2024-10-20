import Image from 'next/image';
import React from 'react'

function ComunidadeCard({
    children,
    title,
    imagePath,
    subtitle,
    secondDesc,
    i,
  }: Readonly<{
    children: React.ReactNode;
    title: string;
    imagePath: string;
    subtitle: string;
    i: number;
    secondDesc?: string
  }>) {
    return (
        <div
        className={`2xl:w-[67.5%] 2xl:min-h-[75vh] relative flex min-h-[90vh] w-[80%] items-center justify-between`}
        >
        <div className="absolute -z-[1] h-[75%] w-[40%] bg-BG top-0 right-0" />
        <div className={`absolute -z-[2] h-full w-full bg-Blue/50`} />
        <div
        className={`absolute right-[0.25%] top-[0.25%] -z-[1] h-[99.5%] w-[99.5%] bg-BG`}
        />
        <div className='flex p-4 justify-between mb-[2em]'>

            <div className="2lg:w-[55%] relative h-[80%] w-[50%]">
                <div className="relative flex h-[70%] w-[90%] flex-col gap-4 pl-12 pt-16 text-white">
                    <div className="flex items-center gap-4">
                    <div className="h-[0.1em] w-[10%] bg-Yellow" />
                    <p className="font-Anton font-bold uppercase tracking-widest text-Yellow">
                        {subtitle}
                    </p>
                    </div>
                    <p className="font-Anton text-[4em] font-bold tracking-[-.07em]">
                    {title}
                    </p>
                    {children}
                </div>
            </div>
            <div className='w-[40%] gap-[10%] flex flex-col p-4 text-white'>
                <Image
                alt={imagePath}
                src={`/pngs/${imagePath}`}
                width={1000}
                height={1000}
                className="w-full rounded-md object-contain"
                />
                <p className='text-2xl'>{secondDesc}</p>
            </div>
        </div>
      </div>
    );
}

export default ComunidadeCard