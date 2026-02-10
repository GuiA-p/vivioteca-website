import { cva, type VariantProps } from 'class-variance-authority';
import NextLink from 'next/link';
import { forwardRef } from 'react';
import { FiExternalLink } from 'react-icons/fi';

import { cn } from '@/utils/cn';

const linkVariants = cva(
  'font-bold transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500',
  {
    variants: {
      variant: {
        internal: 'text-blue-600 hover:text-blue-800',
        navbar: 'hover:text-blue-400',
        footer: 'text-sm hover:text-blue-400',
        aside: 'text-gray-700 hover:text-gray-900',
        external: 'text-blue-600 underline hover:text-blue-800',
      },
      theme: {
        default: 'text-gray-700',
        dark: 'text-gray-50 hover:text-gray-200',
      },
      underline: {
        true: 'underline',
        false: 'no-underline',
      },
    },
    compoundVariants: [
      {
        variant: 'external',
        className: 'inline-flex items-center gap-1',
      },
    ],
    defaultVariants: {
      variant: 'internal',
      theme: 'default',
      underline: false,
    },
  },
);

export interface LinkProps
  extends
    React.AnchorHTMLAttributes<HTMLAnchorElement>,
    VariantProps<typeof linkVariants> {
  href: string;
  externalIcon?: boolean;
}

const Link = forwardRef<HTMLAnchorElement, LinkProps>(
  (
    {
      className,
      variant,
      theme,
      underline,
      href,
      children,
      externalIcon = false,
      ...props
    },
    ref,
  ) => {
    const isExternal = href.startsWith('http') || variant === 'external';
    const LinkComponent = isExternal ? 'a' : NextLink;

    return (
      <LinkComponent
        href={href}
        ref={ref}
        className={cn(linkVariants({ variant, theme, underline }), className)}
        target={isExternal ? '_blank' : undefined}
        rel={isExternal ? 'noopener noreferrer' : undefined}
        {...props}
      >
        {children}
        {isExternal && externalIcon && <FiExternalLink className="text-sm" />}
      </LinkComponent>
    );
  },
);

Link.displayName = 'Link';

export { Link, linkVariants };
