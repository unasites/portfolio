import clsx from "clsx";
import type { ButtonHTMLAttributes } from "react";
import Arrow from "../../icons/Arrow";

type ButtonVariant = "primary" | "secondary";
type ButtonSize = "sm" | "md" | "lg";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
};

const Button = ({
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={clsx(
        "inline-flex items-center justify-center rounded-full font-medium transition-all",

        size === "sm" && "px-4 py-1.5 text-sm",
        size === "md" && "px-6 py-2 text-sm",
        size === "lg" && "px-8 py-3 text-base",

        variant === "primary" &&
          "bg-primary-gradient text-text hover:opacity-90",
        variant === "secondary" &&
          "bg-transparent text-text-muted hover:text-text gap-2",

        className
      )}
      {...props}
    >
      {children}
      {variant === "secondary" && <Arrow />}
    </button>
  );
};

export default Button;
