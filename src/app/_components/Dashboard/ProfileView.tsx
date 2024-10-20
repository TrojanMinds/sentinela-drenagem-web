import Image from 'next/image'
import React from 'react'
import { api } from '~/trpc/server'
import ButtonSignOut from './ButtonSignOut'

async function ProfileView() {
    const userData = await api.user.GetUser()

  return (
    <div className='h-full w-full justify-between flex flex-col'>
        <div className='w-full h-auto'>
            <div className='flex flex-row items-center gap-4 bg-white/5 py-2 my-2 px-4 mx-4 rounded-md shadow-xl'>
                <Image src={userData?.image ?? ""} width={300} height={300} alt='profile Image' className='rounded-full w-[20%] aspect-square object-cover shadow-2xl'/>
                <div className='flex flex-col'>
                    <p className='text-white font-Anton font-bold text-[1.5em]'>{userData?.name}</p>
                    <p className='font-Anton text-Yellow'>{userData?.email}</p>
                </div>
            </div>

            <div className='py-2 my-2 min-h-[30em] text-white/90 px-4 mx-4 bg-white/5 flex flex-col justify-between rounded-md'>
                <p> {userData?.Locale ?? "User didn't specify any location"} </p>
                <div className='flex flex-row items-center justify-between ProfileViewDiv1'>
                    <div className='flex items-center'>
                        <p>Latitude: </p> {userData?.Latitude ?? "unknown"}
                    </div>
                    <div className='flex items-center'>
                        <p>Longitude: </p> {userData?.Longitude ?? "unknown"}
                    </div>
                </div>
            </div>
        </div>

        <div className='w-full flex items-center flex-col justify-center py-2 pb-4 my-2'>
            <ButtonSignOut/>
        </div>
    </div>
  )
}

export default ProfileView