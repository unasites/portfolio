import type { ReactNode } from "react";

export type AppRoute = {
  path: string;
  label: string;
  element?: ReactNode;
  showInNav?: boolean;
};
