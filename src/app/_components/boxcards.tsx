import { ReactNode } from "react";

interface Prop {
  title: string;
  children: ReactNode;
}

export default function Box({ title, children }: Prop) {
  return (
    <div className="mb-14 flex w-3/5 flex-col border border-Blue border-opacity-35 p-10 font-bold text-white">
      <div className="w-96 border border-Yellow"></div>
      <h2 className="mb-5 mt-4 font-sans text-4xl">{title}</h2>
      {children}
    </div>
  );
}
