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

// 1. Tipagem polimórfica (sem Any)
type TextProps<T extends React.ElementType> = VariantProps<
  typeof textVariants
> & {
  as?: T;
} & Omit<
    React.ComponentPropsWithoutRef<T>,
    keyof VariantProps<typeof textVariants> | 'as'
  >;

// 2. Componente interno
const TextInner = <T extends React.ElementType = 'p'>(
  { className, size, weight, variant, as, ...props }: TextProps<T>,
  ref: React.ComponentPropsWithRef<T>['ref'],
) => {
  const Component = as || ('p' as React.ElementType);

  return (
    <Component
      ref={ref}
      className={cn(textVariants({ size, weight, variant }), className)}
      {...props}
    />
  );
};

// 3. Exportação com tipagem manual para evitar o "any" no displayName
type TextComponent = <T extends React.ElementType = 'p'>(
  props: TextProps<T> & { ref?: React.ComponentPropsWithRef<T>['ref'] },
) => React.ReactNode;

export const Text = React.forwardRef(TextInner) as unknown as TextComponent & {
  displayName?: string;
};

Text.displayName = 'Text';
