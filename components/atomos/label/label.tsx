import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';

import { cn } from '@/utils/cn';

const labelVariants = cva('text-sm font-medium leading-none', {
  variants: {
    variant: {
      default: 'text-gray-800',
      disabled: 'text-gray-400 cursor-not-allowed',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

export interface LabelProps
  extends
    React.LabelHTMLAttributes<HTMLLabelElement>,
    VariantProps<typeof labelVariants> {}

const Label = React.forwardRef<HTMLLabelElement, LabelProps>(
  ({ className, variant, children, ...props }, ref) => {
    return (
      <label
        ref={ref}
        className={cn(labelVariants({ variant }), className)}
        {...props}
      >
        {children}
      </label>
    );
  },
);

Label.displayName = 'Label';

export { Label };
