import Image from 'next/image'
import React from 'react'

function Nav() {
  return (
    <div className='absolute w-full px-[10%] flex items-center justify-center'>
        <div className='absolute left-0 flex items-center justify-center'>
            <Image src={"/svgs/logo.svg"} width={500} height={500} alt='logo'/>
        </div>
    </div>
  )
}

export default Nav