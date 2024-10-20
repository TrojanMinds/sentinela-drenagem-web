"use client";

import React from 'react'
import { api } from '~/trpc/server';

interface props{
    id: string
}

function FavoriteButton({...props}: props) {
    const isFollowed = api.user.isFolowed({...props})
    console.log(isFollowed)

  return (
    <button className={`ClipStar w-8 aspect-square absolute top-0 right-0 m-2 bg-Yellow`}></button>
  )
}

export default FavoriteButton