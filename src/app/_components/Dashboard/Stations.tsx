import React from 'react'
import { api, HydrateClient } from '~/trpc/server'
import FavoriteButton from './FavoriteButton'

interface props{
    i: string
}

async function Stations({...props} : props) {
    const data = props.i == "1" ? await api.user.GetUserFollowings() :  await api.user.GetAllSatations()

    if(props.i == "2") return <>Not implemented</>

  return (
    <>
        {data.map((k,i) => <div className='w-full justify-between bg-BG/50 2xl:min-h-[20%] min-h-[30%] rounded-md p-4 flex flex-row items-center gap-4 opacity-80 hover:opacity-100 transition-all relative overflow-hidden'>
            <div key={i} className={`absolute w-full h-full top-0 left-0 bg-gradient-to-t to-transparent
                ${k.Status < 25 ? 'from-green-500/75' : k.Status < 50 ? "from-green-500/50" : k.Status < 75 ? "from-red-500/50" : "from-red-500/75" }
            `}/>
            <div className='flex flex-row min-w-[50%] h-full gap-4 z-10'>
                <p className='text-[4.5em] font-Anton text-white/20 font-semibold'>{k.Status}%</p>
                <div className='flex h-full flex-col justify-between  min-w-[50%]'>
                    <div className='flex flex-col'>
                        <p className='text-lg text-white'>{k.Locale}</p>
                        <p className='text-Yellow/80 text-sm'>Latitude: {k.Latitude.toPrecision(6)}</p>
                        <p className='text-Yellow/80 text-sm'>Longitude: {k.Longitude.toPrecision(6)}</p>
                    </div>
                    <p className='text-white/20 tracking-wide font-bold font-Anton'>{k.Status < 25 ? "Minimal" : k.Status < 50 ? "Low" : k.Status < 75 ? "High" : "Extreme"} Danger</p>
                </div>
            </div>
            <div className='flex flex-col justify-center gap-4 h-full StationsDiv1 z-10 mr-[2em]'>
                <p> temperature: {k.Temperature} </p>
                <p> humidity: {k.Umidity} </p>
            </div>
        </div>)}
    </>
  )
}

export default Stations