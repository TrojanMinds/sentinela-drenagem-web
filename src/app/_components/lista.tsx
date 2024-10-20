import { ReactNode } from "react";

interface Prop {
  children: ReactNode;
}

export default function Lista({ children }: Prop) {
  return (
    <ul className="text-Yellow mb-5">{children}</ul>
  );
}
