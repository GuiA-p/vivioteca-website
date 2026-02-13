import { cva, type VariantProps } from 'class-variance-authority';
import NextLink from 'next/link';
import * as React from 'react';
import { FiExternalLink } from 'react-icons/fi';

import { cn } from '@/utils/cn';

const linkVariants = cva(
  'font-bold transition-colors duration-200 rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ring-offset-background w-fit',
  {
    variants: {
      variant: {
        internal: 'text-primary hover:opacity-80',
        subgect:
          'bg-foreground text-primary-foreground px-2 py-1 hover:bg-primary-foreground hover:text-foreground ',
        navbar: 'text-foreground/80 hover:text-primary',
        footer: 'text-sm text-muted-foreground hover:text-primary',
        aside:
          'text-muted-foreground hover:text-foreground hover:bg-muted/30 px-2 py-1 -ml-2 rounded-md',
        external:
          'text-primary underline decoration-primary/30 hover:decoration-primary',
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

const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(
  (
    {
      className,
      variant,
      underline,
      href,
      children,
      externalIcon = false,
      ...props
    },
    ref,
  ) => {
    const isExternal =
      href.startsWith('http') ||
      href.startsWith('//') ||
      props.target === '_blank';

    const commonProps = {
      ref,
      className: cn(linkVariants({ variant, underline }), className),
      ...props,
    };

    if (isExternal) {
      return (
        <NextLink
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          {...commonProps}
        >
          {children}
          {externalIcon && (
            <FiExternalLink className="text-[0.8em] opacity-70" />
          )}
        </NextLink>
      );
    }

    return (
      <NextLink href={href} {...commonProps}>
        {children}
      </NextLink>
    );
  },
);

Link.displayName = 'Link';

export { Link };
