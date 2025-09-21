// components/common/Button.tsx
import * as React from "react";
import { cva, cx, type VariantProps } from "class-variance-authority";

const buttonVariants = cva(
  "inline-flex items-center justify-center font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none rounded-12px",
  {
    variants: {
      variant: {
        primary: "bg-brand-primary hover:bg-brand-dark cursor-pointer text-neutral-white rounded-12px font-semibold leading-none h-52px",
        secondary:
          "bg-transparent border border-neutral-black text-neutral-black hover:bg-neutral-black hover:text-neutral-white",
        outline:
          "bg-transparent border border-brand-primary text-brand-primary hover:bg-accent-light",
        ghost: "bg-transparent text-brand-primary hover:bg-accent-light",
        danger: "bg-red-600 hover:bg-red-700 text-neutral-white",
      },
      size: {
        sm: "px-3 py-2 text-sm",
        md: "px-6 py-17-5px text-xl",
        lg: "px-6 py-17-5px text-2xl",
      },
      fullWidth: {
        true: "w-full",
        false: "w-fit",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
      fullWidth: false,
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  children?: React.ReactNode;
}

export function Button({
  className,
  variant,
  size,
  fullWidth,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cx(buttonVariants({ variant, size, fullWidth }), className)}
      {...props}
    >
      {children}
    </button>
  );
}
