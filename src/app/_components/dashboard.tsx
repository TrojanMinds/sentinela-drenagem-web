import Image from "next/image"

import mapaAL from "public/pngs/mapa-al.png"
import mapaBra from "public/pngs/mapa-bra.png"
import fluxo from "public/svgs/fluxo.svg"

export default function DashboardComponent () {
  return (
    <div className="w-screen text-white  font-anton">
      <div className="w-screen flex justify-center">
        <div className="mr-10 text-center flex flex-col items-center">
          <h2 className="bold text-2xl">Localização de bueiros e canais monitorados</h2>
          <Image className="my-4 rounded-3xl" src={mapaAL} alt="mapa alagoas" width={500}></Image>
          <Image className="" src={fluxo} alt="fluxo" width={250}></Image>
        </div>
        <div className="text-center">
          <h2 className="mb-4 bold text-2xl">Lugares com suscetibilidade a inundação</h2>
          <Image className="rounded-3xl" src={mapaBra} alt="mapa brasil" width={500}></Image>
        </div>
      </div>

    </div>
  )
}