import type { PageContainerProps } from "../types/PageContainerProps";

const PageContainer = ({children, className}: PageContainerProps) => {
  return <div className={`mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ${className}`}>{children}</div>;
};

export default PageContainer;
