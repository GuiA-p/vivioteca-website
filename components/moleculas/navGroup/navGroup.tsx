'use client'

import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';
import { cn } from '@/utils/cn';

const navGroupVariants = cva('flex gap-4', {
  variants: {
    variant: {
      horizontal: 'flex-row items-center',
      vertical: 'flex-col',
    },
    align: {
      center: 'justify-center', 
      left: 'justify-start',
      right: 'justify-end', 
    }
  },
  defaultVariants: {
    variant: 'horizontal',
    align: 'right'
  },
});

export interface LinksGroupProps
    extends React.ComponentPropsWithoutRef<'div'>,  VariantProps<typeof navGroupVariants> {activeClassName?: string;}

const NavGroup = React.forwardRef<HTMLDivElement, LinksGroupProps>(({ className, variant ,children, ...props }, ref) => {
    return (
        <div
            ref={ref}
            className={cn(navGroupVariants({variant}), className)}
            {...props}>
            {children}
        </div>
    )
})

NavGroup.displayName = 'LinksGroup';

export { NavGroup }