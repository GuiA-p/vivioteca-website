import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';

import { cn } from '@/utils/cn';

const pageLayoutVariants = cva('w-full flex flex-col min-h-screen', {
  variants: {
    container: {
      default: 'container mx-auto',
      full: 'w-full',
      narrow: 'max-w-4xl mx-auto',
      wide: 'max-w-7xl mx-auto',
    },
    padding: {
      none: 'p-0',
      sm: 'p-4',
      md: 'p-6',
      lg: 'p-10',
    },
    spacing: {
      none: 'gap-0',
      sm: 'gap-4',
      md: 'gap-6',
      lg: 'gap-10',
    },
  },
  defaultVariants: {
    container: 'default',
    padding: 'md',
    spacing: 'md',
  },
});

export interface PageLayoutProps
  extends
    React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof pageLayoutVariants> {}

export const PageLayout = React.forwardRef<HTMLElement, PageLayoutProps>(
  ({ className, container, padding, spacing, children, ...props }, ref) => {
    return (
      <main
        ref={ref}
        className={cn(
          pageLayoutVariants({ container, padding, spacing }),
          className,
        )}
        {...props}
      >
        {children}
      </main>
    );
  },
);

PageLayout.displayName = 'PageLayout';
