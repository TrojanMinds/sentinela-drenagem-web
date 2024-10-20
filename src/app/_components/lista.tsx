import { ReactNode } from "react";

interface Prop {
  children: ReactNode;
}

export default function Lista({ children }: Prop) {
  return <ul className="mb-5 text-Yellow">{children}</ul>;
}
