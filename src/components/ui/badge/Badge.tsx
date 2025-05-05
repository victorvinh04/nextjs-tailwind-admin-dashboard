import React from "react";
import { cva, type VariantProps } from 'class-variance-authority'
import { Slot } from '@radix-ui/react-slot'
import { cn } from '@/lib/utils'

type BadgeVariant = "default" | "light" | "solid";
type BadgeSize = "sm" | "md";
type BadgeColor =
  | "primary"
  | "success"
  | "error"
  | "warning"
  | "info"
  | "light"
  | "dark";

interface BadgeProps {
  variant?: BadgeVariant; // Light or solid variant
  size?: BadgeSize; // Badge size
  color?: BadgeColor; // Badge color
  startIcon?: React.ReactNode; // Icon at the start
  endIcon?: React.ReactNode; // Icon at the end
  children: React.ReactNode; // Badge content
}

const badgeVariants = cva(
  "inline-flex items-center px-2.5 py-0.5 justify-center gap-1 rounded-full font-medium",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground [a&]:hover:bg-primary/90",
        primary:
          "bg-brand-50 text-brand-500 dark:bg-brand-500/15 dark:text-brand-400",
        success:
          "bg-success-50 text-success-600 dark:bg-success-500/15 dark:text-success-500",
        error:
          "bg-error-50 text-error-600 dark:bg-error-500/15 dark:text-error-500",
        warning:
          "bg-warning-50 text-warning-600 dark:bg-warning-500/15 dark:text-orange-400",
        info: "bg-blue-light-50 text-blue-light-500 dark:bg-blue-light-500/15 dark:text-blue-light-500",
        light: "bg-gray-100 text-gray-700 dark:bg-white/5 dark:text-white/80",
        dark: "bg-gray-500 text-white dark:bg-white/5 dark:text-white",
      },
      size: {
        sm: "text-theme-xs", // Smaller padding and font size
        md: "text-sm", // Default padding and font size
      },
      solid: {
        primary: "bg-brand-500 text-white dark:text-white",
        success: "bg-success-500 text-white dark:text-white",
        error: "bg-error-500 text-white dark:text-white",
        warning: "bg-warning-500 text-white dark:text-white",
        info: "bg-blue-light-500 text-white dark:text-white",
        light: "bg-gray-400 dark:bg-white/5 text-white dark:text-white/80",
        dark: "bg-gray-700 text-white dark:text-white",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function Badge({
    className,
    variant,
    asChild = false,
...props
}: React.ComponentProps<"span"> &
VariantProps<typeof badgeVariants> & { asChild?: boolean }) {

  // Define size styles
  const SizeVariants = {
    sm: "text-theme-xs", // Smaller padding and font size
    md: "text-sm", // Default padding and font size
  };

  // Define color styles for variants
  const Comp = asChild ? Slot : "span"
  return (
    <Comp
      data-slot="badge"
      className={cn(badgeVariants({ variant }), className)}
      {...props}
    />
  )
}

export { Badge, badgeVariants }
