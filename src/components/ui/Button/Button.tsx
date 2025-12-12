import clsx from "clsx";
import type { ButtonHTMLAttributes } from "react";
import Arrow from "../../icons/Arrow";

type ButtonVariant = "primary" | "secondary";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
};

const Button = ({ variant = "primary", className, children, ...props }: ButtonProps) => {
  return (
    <button
      className={clsx(
        "inline-flex items-center justify-center rounded-full px-6 py-2 text-sm font-medium transition-all",
        variant === "primary" && "bg-primary-gradient text-text hover:",
        variant === "secondary" && "bg-transparent text-text-muted hover:text-text gap-2",
        className
      )}
      {...props}
    >
      {children}
      {variant === "secondary" && (
        <Arrow/>
      )}
    </button>
  );
};

export default Button;
