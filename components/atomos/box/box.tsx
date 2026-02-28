import { cva, VariantProps } from 'class-variance-authority';
import React from 'react';

import { cn } from '@/utils/cn';

const boxVariants = cva(
  'flex flex-col gap-4 border border-gray-100 p-16 rounded-xl shadow-2xl w-[450px]',
  {
    variants: {
      variant: {},
    },
    // defaultVariants: {
    //    variant: '',
    // },
  },
);

interface BoxProsp
  extends
    React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof boxVariants> {}

const Box = React.forwardRef<HTMLDivElement, BoxProsp>(
  ({ children, className, variant, ...props }, ref) => {
    return <div className={cn(boxVariants({ variant }), ref)}>{children}</div>;
  },
);

export { Box };
