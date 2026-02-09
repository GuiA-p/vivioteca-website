import * as React from 'react'
import NextLink from 'next/link'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/utils/cn'

const linkVariants = cva('font-bold text-gray-700 hover:text-blue-400', {
  variants: {
    variant: {
      default: '',
      outline: 'text-blue-600 underline',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
})

export interface LinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement>,
    VariantProps<typeof linkVariants> {
  href: string
}

const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(
  ({ className, variant, href, children, ...props }, ref) => {
    return (
      <NextLink
        href={href}
        ref={ref}
        className={cn(linkVariants({ variant }), className)}
        {...props}
      >
        {children}
      </NextLink>
    )
  }
)

Link.displayName = 'Link'

export { Link }
