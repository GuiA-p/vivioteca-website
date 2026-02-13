import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';

import { cn } from '@/utils/cn';

const inputVariants = cva(
  'w-full rounded-md border px-3 py-2 outline-none transition focus:ring-2 focus:ring-border disabled:opacity-50',
  {
    variants: {
      variant: {
        primary: 'border-border',
        search: 'border-border',
        error: 'border-error focus:ring-error',
      },
    },
    defaultVariants: {
      variant: 'primary',
    },
  },
);

interface InputProps
  extends
    React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants> {
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, variant, leftIcon, rightIcon, ...props }, ref) => {
    return (
      <div className="relative w-full">
        {leftIcon && (
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-muted">
            {leftIcon}
          </div>
        )}

        <input
          ref={ref}
          className={cn(
            inputVariants({ variant }),
            leftIcon && 'pl-10',
            rightIcon && 'pr-10',
            className,
          )}
          {...props}
        />

        {rightIcon && (
          <div className="absolute right-3 top-1/2 -translate-y-1/2 text-muted">
            {rightIcon}
          </div>
        )}
      </div>
    );
  },
);

Input.displayName = 'Input';

export { Input };
