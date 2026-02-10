import { cva, type VariantProps } from 'class-variance-authority';
import { forwardRef } from 'react';

import { Link } from '@/components/atomos/link/link';
import { cn } from '@/utils/cn';

const navLinksVariants = cva('flex', {
  variants: {
    variant: {
      horizontal: 'flex-row gap-4 md:gap-6',
      vertical: 'flex-col gap-2 md:gap-3',
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

export interface NavLinksProps
  extends
    React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof navLinksVariants> {
  links?: Array<{
    href: string;
    label: string;
    variant?: 'internal' | 'external' | 'navbar' | 'footer' | 'aside';
  }>;
}

const defaultLinks = [
  { href: '/', label: 'Home', variant: 'navbar' as const },
  { href: '/contact', label: 'Contato', variant: 'navbar' as const },
  { href: '/about', label: 'Sobre', variant: 'navbar' as const },
  { href: '/login', label: 'Login', variant: 'navbar' as const },
];

const NavLinks = forwardRef<HTMLDivElement, NavLinksProps>(
  ({ className, variant, align, links = defaultLinks, ...props }, ref) => {
    return (
      <nav
        ref={ref}
        className={cn(navLinksVariants({ variant, align }), className)}
        aria-label="Navegação principal"
        {...props}
      >
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            variant={link.variant}
            className="whitespace-nowrap"
          >
            {link.label}
          </Link>
        ))}
      </nav>
    );
  },
);

NavLinks.displayName = 'NavLinks';

export { NavLinks, navLinksVariants };
