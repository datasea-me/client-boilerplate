import type { ReactNode } from "react";

function Container({ children }: { children: ReactNode }) {
  return <section>{children}</section>;
}

export default Container;
