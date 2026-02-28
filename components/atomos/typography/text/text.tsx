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

type TextProps<T extends React.ElementType> = VariantProps<
  typeof textVariants
> & {
  as?: T;
} & Omit<
    React.ComponentPropsWithoutRef<T>,
    keyof VariantProps<typeof textVariants> | 'as'
  >;

const TextInner = (
  {
    className,
    size,
    weight,
    variant,
    as,
    ...props
  }: TextProps<React.ElementType>,
  ref: React.ForwardedRef<HTMLElement>,
) => {
  const Component = as || 'p';

  return (
    <Component
      ref={ref}
      className={cn(textVariants({ size, weight, variant }), className)}
      {...props}
    />
  );
};

interface TextComponent {
  <T extends React.ElementType = 'p'>(
    props: TextProps<T> & { ref?: React.ComponentPropsWithRef<T>['ref'] },
  ): React.ReactNode;
  displayName?: string;
}

export const Text = React.forwardRef(TextInner) as unknown as TextComponent;

Text.displayName = 'Text';

export { textVariants };
