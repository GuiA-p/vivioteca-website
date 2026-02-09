import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/utils/cn';

// exemplo cva: 'base focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50',
const buttonVariants = cva('font-black border-2 px-4 py-2 rounded-xl shadow-',
  {
    variants: {
      variant: {
        default: '',
        outline: '',
        ghost: '',
      },
      size: {
        default: '',
        sm: '',
        lg: '',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

// Type
export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';

export { Button, buttonVariants };