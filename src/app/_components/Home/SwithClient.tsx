"use client";

import React from "react";
import Nav, { NavButtons } from "./nav";
import Image from "next/image";
import { SessionProvider } from "next-auth/react";
import CardsSistema from "../cardsistema";

function HomeCard({
  children,
  title,
  imagePath,
  subtitle,
  i,
}: Readonly<{
  children: React.ReactNode;
  title: string;
  imagePath: string;
  subtitle: string;
  i: number;
}>) {
  return (
    <div
      className={`2lg:w-[70%] 2lg:h-[75vh] relative flex h-[90vh] w-[90%] items-center justify-between ${i % 2 == 1 && "flex-row-reverse"}`}
    >
      <div className="2lg:w-[55%] relative h-[80%] w-[60%]">
        <p className="font-Anton absolute top-[-10%] text-[9em] font-bold tracking-[-0.1em] text-white opacity-10">
          0{i + 1}
        </p>
        <div
          className={`absolute right-[0.25%] top-[0.25%] -z-[1] h-[99.5%] w-[99.5%] bg-BG`}
        />
        <div className="absolute -z-[1] h-[80%] w-[30%] bg-BG" />
        <div className={`absolute -z-[2] h-full w-full bg-Blue/50`} />
        <div className="relative flex h-[70%] w-[90%] flex-col gap-4 pl-28 pt-16 text-white">
          <div className="flex items-center gap-4">
            <div className="h-[0.1em] w-[10%] bg-Yellow" />
            <p className="font-Anton font-bold uppercase tracking-widest text-Yellow">
              {subtitle}
            </p>
          </div>
          <p className="font-Anton text-[4em] font-bold tracking-[-.07em]">
            {title}
          </p>
          {children}
        </div>
      </div>
      <Image
        alt={imagePath}
        src={`/pngs/${imagePath}`}
        width={1000}
        height={1000}
        className="2lg:w-[40%] h-[90%] w-[35%] rounded-sm object-cover"
      />
    </div>
  );
}

function Sistema() {
  return <CardsSistema />;
}

interface DataSelection {
  imagePath: string;
  html: React.ReactNode;
  title: string;
  subtitle: string;
}

const DataForSelected: DataSelection[][] = [
  [
    {
      title: "Problema",
      subtitle: "causa",
      imagePath: "H1.png",
      html: (
        <div>
          {" "}
          A falta de manutenção adequada nos sistemas de drenagem urbana, aliada
          à obstrução dos bueiros e canais, é um fator que intensifica o risco
          de enchentes em áreas urbanas. Problemas de drenagem frequentemente
          passam despercebidos até o momento crítico, quando as chuvas intensas
          resultam em alagamentos, causando prejuízos econômicos e sociais. Com
          as mudanças climáticas, o aumento na frequência de chuvas intensas e
          imprevisíveis torna ainda mais urgente a necessidade de monitorar as
          redes de drenagem.
        </div>
      ),
    },
    {
      title: "Problema",
      subtitle: "causa",
      imagePath: "H1.png",
      html: <div>AAA</div>,
    },
  ],
  [],
  [{ title: "test", subtitle: "ggg", imagePath: "", html: Sistema() }],
  [],
  [],
];

function SwithClient() {
  const [Selected, ChangeSeleted] = React.useState(0);

  return (
    <SessionProvider>
      <div className="flex min-h-screen flex-col items-center overflow-x-hidden bg-BG px-4">
        <Nav func={ChangeSeleted} selected={Selected} />
        <Image
          src={"/pngs/background.png"}
          width={5000}
          height={5000}
          alt="background"
          className="absolute top-0 w-full object-contain"
        />
        <div className="relative z-[10] mb-[10%] flex h-[100vh] w-[60%] flex-col items-center pt-[20%]">
          <div>
            <div className="flex w-full items-center gap-4">
              <div className="h-[0.2em] w-[8%] bg-Yellow" />
              <p className="font-Aton font-bold tracking-widest text-Yellow">
                {NavButtons[Selected]}
              </p>
            </div>
            <p className="font-Alfa text-[5em] font-bold tracking-wider text-white">
              Sentinela de Drenagem
            </p>
          </div>
        </div>
        <div className="absolute top-0 h-[100vh] w-full bg-gradient-to-tl from-transparent via-transparent to-BG/80" />
        <div className="absolute bottom-[-30%] h-[175vh] w-full bg-gradient-to-b from-transparent via-transparent to-BG" />
        <div className="absolute bottom-[-100%] h-[70vh] w-full bg-BG" />

        <div className="z-10 flex w-full flex-col items-center justify-center gap-[10em]">
          {DataForSelected[Selected]?.map((obj, i) => {
            if (Selected == 0)
              return HomeCard({ children: obj.html, ...obj, i });
            if (Selected == 2) return Sistema();
          })}
        </div>
      </div>
    </SessionProvider>
  );
}

export default SwithClient;
