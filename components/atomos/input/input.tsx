import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';

import { cn } from '@/utils/cn';

// trazer todos os elementos de um botão porque já existe uma semantica para ele usando o interface utilizando cva variantes passado com propriedade

const inputVariants = cva(
  'flex flex-row border-2 border-gray-600 rounded-md p-1 shadow-inner shadow-black/90 px-2',
  {
    variants: {
      variant: {
        primary: '',
        search: 'border-black',
      },
    },
    defaultVariants: {
      variant: 'primary',
    },
  },
);

interface InputProps
  extends
    React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, variant, ...props }, ref) => {
    return (
      <input
        className={cn(inputVariants({ variant, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);

Input.displayName = 'Input';

export { Input, inputVariants };
