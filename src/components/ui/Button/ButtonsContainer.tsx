import { cn } from "@/utils/cn";
import { type ReactNode } from "react";
type ButtonsContainerProps = {
  className?: string;
  children: ReactNode;
};

const ButtonsContainer = ({ className, children }: ButtonsContainerProps) => {
  return (
    <div
      className={cn(
        "flex flex-col sm:flex-row  max-w-full w-full lg:max-w-none items-center gap-4 justify-center",
        className
      )}
    >
      {children}
    </div>
  );
};

export default ButtonsContainer;
