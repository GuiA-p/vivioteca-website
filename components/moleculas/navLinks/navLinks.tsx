import { Link } from "@/components/atomos/link/link"
import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';
import { cn } from '@/utils/cn';

const navLinksVariants = cva('flex ', {
    variants: {
        variant: {
            horizontal: 'flex-row gap-4',
            vertical: 'flex-col gap-2',
        },
    },
    defaultVariants: {
    variant: 'horizontal',
},
});

interface NavLinksProps
  extends 
  React.HTMLAttributes<HTMLDivElement>,
  VariantProps<typeof navLinksVariants> {
  href: string;
}

const navLinkslist = [
        {
            href: '/',
            label: 'Home',
        },
        {
            href: 'contact',
            label: 'Contato',
        },
        {
            href: 'about',
            label: 'Sobre',
        },
    ]


const NavLinks = React.forwardRef<HTMLDivElement, NavLinksProps>(
    ({ className, variant, ...props }, ref) => {
        return(
            <div className={cn(navLinksVariants({ variant }), className)} ref={ref} {...props}>
                {navLinkslist.map(e => {
                    return (
                        <Link variant='footer' theme='dark' href={e.href}>{e.label}</Link>
                    )
                })}
            </div>
        )
    },
);

NavLinks.displayName = 'NavLinks';

export { NavLinks, navLinksVariants };