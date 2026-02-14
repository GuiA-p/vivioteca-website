import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';

import { cn } from '@/utils/cn';

const textVariants = cva('font-serif transition-colors', {
  variants: {
    size: {
      xs: 'text-xs',
      sm: 'text-sm',
      base: 'text-base',
      lg: 'text-lg',
      xl: 'text-xl',
    },
    weight: {
      normal: 'font-normal',
      medium: 'font-medium',
      bold: 'font-bold',
    },
    variant: {
      default: 'text-foreground',
      muted: 'text-muted-foreground',
      white: 'text-primary-foreground',
    },
  },
  defaultVariants: {
    size: 'base',
    weight: 'normal',
    variant: 'default',
  },
});

type TextOwnProps = VariantProps<typeof textVariants> & {
  as?: React.ElementType;
};

type TextProps = TextOwnProps &
  Omit<React.ComponentPropsWithoutRef<any>, keyof TextOwnProps>;

const Text = React.forwardRef<HTMLElement, TextProps>(
  (
    { className, size, weight, variant, as: Component = 'p', ...props },
    ref,
  ) => {
    return (
      <Component
        ref={ref}
        className={cn(textVariants({ size, weight, variant }), className)}
        {...props}
      />
    );
  },
);

Text.displayName = 'Text';

export { Text };
