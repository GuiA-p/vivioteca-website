import { cva, type VariantProps } from 'class-variance-authority';
import NextLink from 'next/link';
import * as React from 'react';

import { cn } from '@/utils/cn';

const linkVariants = cva('font-bold hover:text-blue-400', {
  variants: {
    variant: {
      internal: 'text-blue-600',
      navbar: '',
      footer: 'text-sm',
      aside: 'text-gray-700',
      external: 'text-blue-600 underline',
    },
    theme: {
      default: 'text-gray-700 ',
      dark: 'text-gray-50',
    }
  },
  defaultVariants: {
    variant: 'internal',
    theme:"default",
  },
});

interface LinkProps
  extends
  React.AnchorHTMLAttributes<HTMLAnchorElement>,
  VariantProps<typeof linkVariants> {
  href: string;
}

const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(
  ({ className, variant, theme, href, children, ...props }, ref) => {
    return (
      <NextLink
        href={href}
        ref={ref}
        className={cn(linkVariants({ variant, theme }), className)}
        {...props}
      >
        {children}
      </NextLink>
    );
  },
);

Link.displayName = 'Link';

export { Link, linkVariants };
