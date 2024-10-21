import "~/styles/globals.css";

import { Anton } from '@next/font/google';

const anton = Anton({
  subsets: ['latin'], 
  weight: '400',      
});

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";

import { TRPCReactProvider } from "~/trpc/react";

export const metadata: Metadata = {
  title: "Sentinela de drenagem",
  description: "Plataforma de dispositivos IoT",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <body className={`${anton.className}  font-anton`}>
        <TRPCReactProvider>
          {children}
        </TRPCReactProvider>
      </body>
    </html>
  );
}
