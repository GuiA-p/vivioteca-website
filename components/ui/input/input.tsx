import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/utils/cn';
import { buttonVariants } from '../button/button';

// trazer todos os elementos de um botão porque já existe uma semantica para ele usando o interface utilizando cva variantes passado com propriedade 

const inputVariants = cva('flex flex-row border-2 rounded-md p-1', 
    {
        variants: {
            variant: {
                primary: 'p-4',
                secundary: 'p-1',
                search: 'p-2 pl-8',

            },
            defaultVariants: {
                variant: 'primary',
                
            }
        }
    }

)

interface InputProps
    extends React.InputHTMLAttributes<HTMLInputElement>,
        VariantProps<typeof inputVariants> {}


const Input = React.forwardRef<HTMLInputElement, InputProps>(
    ({ className, variant, type = 'text', ...props }, ref) => {
         return (
             <input className={cn(inputVariants({ variant, className }))} ref={ref} {...props} />
            );
    }
)

Input.displayName = 'Input';

export { Input, inputVariants };