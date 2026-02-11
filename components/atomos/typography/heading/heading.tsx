import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';

import { cn } from '@/utils/cn';

const headingVariants = cva(
  'font-sans font-bold tracking-tight text-foreground transition-colors',
  {
    variants: {
      level: {
        h1: 'text-4xl md:text-5xl font-extrabold',
        h2: 'text-3xl md:text-4xl',
        h3: 'text-2xl md:text-3xl',
        h4: 'text-xl md:text-2xl',
        h5: 'text-lg md:text-xl',
        h6: 'text-base md:text-lg uppercase tracking-widest',
      },
      color: {
        default: 'text-foreground',
        primary: 'text-primary',
        muted: 'text-muted-foreground',
      },
      align: {
        left: 'text-left',
        center: 'text-center',
        right: 'text-right',
      },
    },
    defaultVariants: {
      level: 'h2',
      color: 'default',
      align: 'left',
    },
  },
);

interface HeadingProps
  extends
    React.HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof headingVariants> {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

const Heading = React.forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ className, level, color, align, as, ...props }, ref) => {
    const Tag = as || level || 'h2';

    return (
      <Tag
        ref={ref}
        className={cn(headingVariants({ level, color, align }), className)}
        {...props}
      />
    );
  },
);

Heading.displayName = 'Heading';

export { Heading, headingVariants };
