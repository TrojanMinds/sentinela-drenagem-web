"use client";

import React from "react";
import { api } from "~/trpc/server";

interface props {
  id: string;
}

function FavoriteButton({ ...props }: props) {
  const isFollowed = api.user.isFolowed({ ...props });
  console.log(isFollowed);

  return (
    <button
      className={`ClipStar absolute right-0 top-0 m-2 aspect-square w-8 bg-Yellow`}
    ></button>
  );
}

export default FavoriteButton;
