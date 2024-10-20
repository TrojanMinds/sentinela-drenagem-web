import Image from 'next/image'
import React from 'react'

const buttons = ["Assine aqui", "Dashboard", "Home", "Sistema", "Comunidade"]

interface props{
    func: React.Dispatch<React.SetStateAction<number>>,
    selected: number
}

function Nav({...props} : props) {

    const button_ = (i: number, title: string) => <button key={i}
    className={`font-Anton text-[1em] font-semibold tracking-tight ${props.selected == i ? "text-ButtonBlue" : "text-white hover:text-Blue hover:scale-105"} transition-all`}
    onClick={() => props.func(i)}
    >
        {title}
    </button>

  return (
    <div className='absolute w-full px-[5%] flex items-center justify-center h-[10vh] pt-[2vh] z-[100]'>
        <div className='w-full h-full relative flex items-center justify-center'>
            <div className='absolute left-0 flex items-center h-full w-[17.5%] gap-2'>
                <Image src={"/svgs/logo.svg"} width={300} height={300} alt='logo' className='object-contain h-[70%] w-[30%]'/>
                <p className='font-Anton text-[1.1em] text-white'>Sentinela <br/> de Drenagem</p>
            </div>
            <div className='gap-10 flex items-center justify-center'>
                {buttons.map((btn, i) => button_(i, btn))}
            </div>
        </div>
    </div>
  )
}

export default Nav