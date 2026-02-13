import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';

import { cn } from '@/utils/cn';

const sectionVariants = cva('w-full', {
  variants: {
    background: {
      default: '',
      muted: 'text-primary-foreground dark:bg-foreground',
      primary: 'bg-foreground text-primary-foreground',
    },
    padding: {
      none: 'py-0',
      sm: 'py-6',
      md: 'py-10',
      lg: 'py-16',
    },
  },
  defaultVariants: {
    padding: 'md',
    background: 'default',
  },
});

const containerVariants = cva('mx-auto flex flex-col', {
  variants: {
    container: {
      default: 'container',
      narrow: 'max-w-4xl',
      wide: 'max-w-7xl',
      full: 'w-full',
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
    spacing: 'md',
  },
});

export interface SectionLayoutProps
  extends
    React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof sectionVariants>,
    VariantProps<typeof containerVariants> {}

const SectionLayout = React.forwardRef<HTMLElement, SectionLayoutProps>(
  (
    { className, background, padding, container, spacing, children, ...props },
    ref,
  ) => {
    return (
      <section
        ref={ref}
        className={cn(sectionVariants({ background, padding }))}
        {...props}
      >
        <div
          className={cn(containerVariants({ container, spacing }), className)}
        >
          {children}
        </div>
      </section>
    );
  },
);

SectionLayout.displayName = 'SectionLayout';

export { SectionLayout };
