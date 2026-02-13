'use client';

import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';

import { cn } from '@/utils/cn';

const asideVariants = cva(
  'bg-primary-foreground hidden md:flex w-1/3 lg:w-1/6 flex-col p-12 gap-4',
  {
    variants: {
      variant: {},
    },
    defaultVariants: {},
  },
);

export interface AsideProps
  extends
    React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof asideVariants> {}

const Aside = React.forwardRef<HTMLElement, AsideProps>(
  ({ className, variant, ...props }, ref) => {
    return (
      <aside
        ref={ref}
        className={cn(asideVariants({ variant }), className)}
        {...props}
      >
        NavLinks variante aside
      </aside>
    );
  },
);

Aside.displayName = 'Aside';

export { Aside };
