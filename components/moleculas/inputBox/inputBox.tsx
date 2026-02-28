import { cva, VariantProps } from 'class-variance-authority';
import React from 'react';

import { cn } from '@/utils/cn';

const inputBoxVariants = cva('flex gap-2 my-2', {
  variants: {
    variant: {
      default: 'flex-col items-start',
      lateral: 'flex-row items-center',
      adicionais: 'flex-row items-center justify-between',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

export interface InputBoxProps
  extends
    React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof inputBoxVariants> {}

const InputBox = React.forwardRef<HTMLDivElement, InputBoxProps>(
  ({ className, children, variant, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(inputBoxVariants({ variant }), className)}
        {...props}
      >
        {children}
      </div>
    );
  },
);

InputBox.displayName = 'InputBox';

export { InputBox };
