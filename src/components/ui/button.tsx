import * as React from "react";
import clsx from "clsx";

type ButtonVariant = "default" | "outline";
type ButtonSize = "default" | "lg";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
  asChild?: boolean;
};

const variantClasses: Record<ButtonVariant, string> = {
  default:
    "bg-gradient-to-r from-sky-600 via-cyan-600 to-emerald-500 text-white border-transparent hover:opacity-95",
  outline:
    "border-slate-300 bg-white/75 text-slate-800 hover:bg-white",
};

const sizeClasses: Record<ButtonSize, string> = {
  default: "h-10 px-4 py-2 text-sm",
  lg: "h-11 px-6 text-base",
};

const baseClasses =
  "inline-flex items-center justify-center rounded-xl border font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500/40 disabled:pointer-events-none disabled:opacity-50";

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", ...props }, ref) => {
    return <button ref={ref} className={clsx(baseClasses, variantClasses[variant], sizeClasses[size], className)} {...props} />;
  }
);

Button.displayName = "Button";
