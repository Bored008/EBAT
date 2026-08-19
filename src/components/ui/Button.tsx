import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';
import { Icon, IconName } from '@/components/icons/Icon';

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 rounded-[23px] text-sm font-normal px-[14px] py-[7px] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 disabled:opacity-50 disabled:pointer-events-none',
  {
    variants: {
      variant: {
        filled: 'bg-[#F00511] text-white hover:bg-[#d0040e]',
        outline: 'border border-[#F00511] text-[#F00511] hover:bg-[#F00511]/10',
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
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  leftIcon?: IconName;
  rightIcon?: IconName;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, leftIcon, rightIcon, children, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        {leftIcon && <Icon name={leftIcon} className="w-[18px] h-[18px]" />}
        <span>{children}</span>
        {rightIcon && <Icon name={rightIcon} className="w-[18px] h-[18px]" />}
      </button>
    );
  }
);

Button.displayName = 'Button';
