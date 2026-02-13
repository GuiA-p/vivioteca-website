import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';

import { cn } from '@/utils/cn';

const acessLayoutVariants = cva('flex flex-col items-center justify-center', {
  variants: {
    container: {
      default: 'w-full min-h-screen',
    },
  },
  defaultVariants: {
    container: 'default',
  },
});

export interface AcessLayoutProps
  extends
    React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof acessLayoutVariants> {}

const AcessLayout = React.forwardRef<HTMLElement, AcessLayoutProps>(
  ({ className, container, children, ...props }, ref) => {
    return (
      <main
        ref={ref}
        className={cn(acessLayoutVariants({ container }), className)}
        {...props}
      >
        {children}
      </main>
    );
  },
);

AcessLayout.displayName = 'AcessLayout';

export { AcessLayout };
