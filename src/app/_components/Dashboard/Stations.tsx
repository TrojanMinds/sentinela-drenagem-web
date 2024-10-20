import React from "react";
import { api, HydrateClient } from "~/trpc/server";
import FavoriteButton from "./FavoriteButton";

interface props {
  i: string;
}

async function Stations({ ...props }: props) {
  const data =
    props.i == "1"
      ? await api.user.GetUserFollowings()
      : await api.user.GetAllSatations();

  if (props.i == "2") return <>Not implemented</>;

  return (
    <>
      {data.map((k, i) => (
        <div className="relative flex min-h-[30%] w-full flex-row items-center justify-between gap-4 overflow-hidden rounded-md bg-BG/50 p-4 opacity-80 transition-all hover:opacity-100 2xl:min-h-[20%]">
          <div
            className={`absolute left-0 top-0 h-full w-full bg-gradient-to-t to-transparent ${k.Status < 25 ? "from-green-500/75" : k.Status < 50 ? "from-green-500/50" : k.Status < 75 ? "from-red-500/50" : "from-red-500/75"} `}
          />
          <div className="z-10 flex h-full min-w-[50%] flex-row gap-4">
            <p className="font-Anton text-[4.5em] font-semibold text-white/20">
              {k.Status}%
            </p>
            <div className="flex h-full min-w-[50%] flex-col justify-between">
              <div className="flex flex-col">
                <p className="text-lg text-white">{k.Locale}</p>
                <p className="text-sm text-Yellow/80">
                  Latitude: {k.Latitude.toPrecision(6)}
                </p>
                <p className="text-sm text-Yellow/80">
                  Longitude: {k.Longitude.toPrecision(6)}
                </p>
              </div>
              <p className="font-Anton font-bold tracking-wide text-white/20">
                {k.Status < 25
                  ? "Minimal"
                  : k.Status < 50
                    ? "Low"
                    : k.Status < 75
                      ? "High"
                      : "Extreme"}{" "}
                Danger
              </p>
            </div>
          </div>
          <div className="StationsDiv1 z-10 mr-[2em] flex h-full flex-col justify-center gap-4">
            <p> temperature: {k.Temperature} </p>
            <p> humidity: {k.Umidity} </p>
          </div>
        </div>
      ))}
    </>
  );
}

export default Stations;
