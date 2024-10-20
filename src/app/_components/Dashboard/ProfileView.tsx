import Image from "next/image";
import React from "react";
import { api } from "~/trpc/server";
import ButtonSignOut from "./ButtonSignOut";

async function ProfileView() {
  const userData = await api.user.GetUser();

  return (
    <div className="flex h-full w-full flex-col justify-between">
      <div className="h-auto w-full">
        <div className="mx-4 my-2 flex flex-row items-center gap-4 rounded-md bg-white/5 px-4 py-2 shadow-xl">
          <Image
            src={userData?.image ?? ""}
            width={300}
            height={300}
            alt="profile Image"
            className="aspect-square w-[20%] rounded-full object-cover shadow-2xl"
          />
          <div className="flex flex-col">
            <p className="font-Anton text-[1.5em] font-bold text-white">
              {userData?.name}
            </p>
            <p className="font-Anton text-Yellow">{userData?.email}</p>
          </div>
        </div>

        <div className="mx-4 my-2 flex min-h-[30em] flex-col justify-between rounded-md bg-white/5 px-4 py-2 text-white/90">
          <p> {userData?.Locale ?? "User didn't specify any location"} </p>
          <div className="ProfileViewDiv1 flex flex-row items-center justify-between">
            <div className="flex items-center">
              <p>Latitude: </p> {userData?.Latitude ?? "unknown"}
            </div>
            <div className="flex items-center">
              <p>Longitude: </p> {userData?.Longitude ?? "unknown"}
            </div>
          </div>
        </div>
      </div>

      <div className="my-2 flex w-full flex-col items-center justify-center py-2 pb-4">
        <ButtonSignOut />
      </div>
    </div>
  );
}

export default ProfileView;
