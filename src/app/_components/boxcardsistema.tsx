import { ReactNode } from "react";

interface Prop {
  title: string;
  children: ReactNode;
}

export default function Box({ title, children }: Prop) {
  return (
    <div className="border border-Blue border-opacity-35 flex flex-col text-white mb-14 p-10 w-3/5 font-bold">
      <div className="border border-Yellow w-96"></div>
      <h2 className="text-4xl font-sans mt-4 mb-5" >{title}</h2>
      {children}
    </div>
  );
}
