import { getServerAuthSession } from "~/server/auth";
import { api, HydrateClient } from "~/trpc/server";
import ProfileView from "../_components/Dashboard/ProfileView";
import NotSignInPage from "../_components/Dashboard/NotSignInPage";
import Link from "next/link";
import Stations from "../_components/Dashboard/Stations";

const LinksSelectionTexts = [
  "Show All", "Following", "Show Near"
]

export default async function Home({
  searchParams,
} : {
  searchParams: { [key: string]: string | string[] | undefined};
}) {
  const session = await getServerAuthSession();
  void api.user.GetUser.prefetch();

  const selected = (searchParams.selection || "0") as string
  if(selected == "0") void api.user.GetUserFollowings.prefetch();
  else if(selected == "1") void api.user.GetAllSatations.prefetch();

  if(!session?.user) return <NotSignInPage/>

  return (
    <HydrateClient>
      <main className="flex min-h-screen flex-row items-center bg-BG overflow-hidden">

        {/* Left */}
        <div className="2lg:w-[20%] h-[100vh]">
          <ProfileView/>
        </div>

        {/* Right */}
        <div className="w-[80%] h-[100vh] flex flex-col items-center bg-white/10">
          {/* Up */}
          <div className=" w-full h-[20vh] py-2 px-8 flex pt-[1%] flex-col gap-4">
            <p className="text-white font-Anton mt-[3%] text-2xl font-bold">Vizualização dos Sistemas de Drenagem</p>
            <div className="w-full bg-BG h-0.5"/>
            <div className="w-full flex items-center gap-8">
              {[...Array(3).keys()].map(key => <Link href={`?${new URLSearchParams({selection: key.toString()})}`}
                className={`min-w-[9em] rounded-md px-4 py-2 transition-all text-Yellow ${key.toString() == selected ? 'bg-ButtonBlue pointer-events-none' : 'bg-BG/50 hover:scale-105 opacity-50 hover:opacity-100'} `}
                >{LinksSelectionTexts[key]}</Link>)}
            </div>
          </div>

          {/* Down */}
          <div className="flex flex-col items-center w-full h-[80vh] gap-8 pt-4 overflow-y-scroll px-8 mt-[2em]">
            <Stations i={selected}/>
          </div>
        </div>
      </main>
    </HydrateClient>
  );
}
