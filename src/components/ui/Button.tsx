'use client';
import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';
import { Icon, IconName } from '@/components/icons/Icon';

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 rounded-[23px] text-sm font-normal px-[14px] py-[7px] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 disabled:opacity-50 disabled:pointer-events-none whitespace-nowrap',
  {
    variants: {
      variant: {
        filled: 'bg-[#F00511] text-white hover:bg-[#d0040e]',
        outline: 'border border-[#F00511] text-[#F00511] hover:bg-[#F00511]/10',
        white: 'bg-white text-black hover:bg-gray-100',
      },
      size: {
        default: 'h-[38px]',
      },
    },
    defaultVariants: {
      variant: 'filled',
      size: 'default',
    },
  }
);

export interface ButtonProps
  extends Omit<HTMLMotionProps<"button">, 'ref'>,
    VariantProps<typeof buttonVariants> {
  children?: React.ReactNode;
  leftIcon?: IconName;
  rightIcon?: IconName;
  iconClassName?: string;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, leftIcon, rightIcon, iconClassName, children, ...props }, ref) => {
    return (
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.95 }}
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        {leftIcon && <Icon name={leftIcon} className={cn("w-[18px] h-[18px]", iconClassName)} />}
        <span>{children as React.ReactNode}</span>
        {rightIcon && <Icon name={rightIcon} className={cn("w-[18px] h-[18px]", iconClassName)} />}
      </motion.button>
    );
  }
);

Button.displayName = 'Button';


