import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';

import { cn } from '@/utils/cn';

// exemplo cva: 'base focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50',
const buttonVariants = cva('px-4 py-2 font-bold rounded-lg hover:shadow-2xl', {
  variants: {
    variant: {
      primary: 'bg-blue-500 hover:bg-blue-400 text-gray-50',
      secundary: 'bg-orange-500 text-gray-50',
      ghost: 'text-gray-700 border-2 hover:text-blue-500 ',
      disable: 'bg-gray-200 text-gray-400 hover:shadow-none',
    },
    size: {
      md: 'text-md',
      sm: 'text-sm',
      lg: 'text-lg',
    },
  },
  defaultVariants: {
    variant: 'primary',
    size: 'md',
  },
});

// Type
export interface ButtonProps
  extends
    React.ButtonHTMLAttributes<HTMLButtonElement>,
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
  },
);
Button.displayName = 'Button';

export { Button, buttonVariants };
