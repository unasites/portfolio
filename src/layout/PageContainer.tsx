import type { ReactNode } from "react";

type PageContainerProps = {
  children: ReactNode;
  className?: string;
};
const PageContainer = ({ children, className }: PageContainerProps) => {
  return <div className={`max-w-7xl px-8 xl:px-20 sm:px-5 lg:px-8 ${className}`}>{children}</div>;
};

export default PageContainer;
