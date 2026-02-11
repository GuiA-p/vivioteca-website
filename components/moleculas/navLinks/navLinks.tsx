'use client';

import { cva, type VariantProps } from 'class-variance-authority';
import { usePathname } from 'next/navigation';
import * as React from 'react';

import { Link } from '@/components/atomos/link/link';
import { cn } from '@/utils/cn';

const navLinksVariants = cva('flex list-none p-0 m-0', {
  variants: {
    variant: {
      horizontal: 'flex-row items-center gap-6 md:gap-8',
      vertical: 'flex-col gap-1 w-full',
    },
    align: {
      left: 'justify-start',
      center: 'justify-center',
      right: 'justify-end',
    },
  },
  defaultVariants: {
    variant: 'horizontal',
    align: 'left',
  },
});

export interface NavLinkItem {
  href: string;
  label: string;
  variant?: 'internal' | 'external' | 'navbar' | 'footer' | 'aside';
}

export interface NavLinksProps
  extends
    React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof navLinksVariants> {
  links?: NavLinkItem[];
}

const defaultLinks: NavLinkItem[] = [
  { href: '/', label: 'Home' },
  { href: '/contact', label: 'Contato' },
  { href: '/about', label: 'Sobre' },
  { href: '/login', label: 'Login' },
];

const NavLinks = React.forwardRef<HTMLElement, NavLinksProps>(
  ({ className, variant, align, links = defaultLinks, ...props }, ref) => {
    const pathname = usePathname();

    return (
      <nav
        ref={ref}
        className={cn(navLinksVariants({ variant, align }), className)}
        aria-label="Navegação principal"
        {...props}
      >
        <ul
          className={cn(
            'flex',
            variant === 'horizontal'
              ? 'flex-row gap-6'
              : 'flex-col gap-2 w-full',
          )}
        >
          {links.map((link) => {
            const isActive = pathname === link.href;

            const linkVariant =
              link.variant || (variant === 'vertical' ? 'aside' : 'navbar');

            return (
              <li
                key={link.href}
                className={variant === 'vertical' ? 'w-full' : ''}
              >
                <Link
                  href={link.href}
                  variant={linkVariant}
                  className={cn(
                    'whitespace-nowrap transition-all',
                    isActive &&
                      'text-primary border-b-2 border-primary rounded-none',
                    isActive &&
                      variant === 'vertical' &&
                      'bg-muted/50 border-b-0 border-l-4 pl-3',
                  )}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    );
  },
);

NavLinks.displayName = 'NavLinks';

export { NavLinks, navLinksVariants };
