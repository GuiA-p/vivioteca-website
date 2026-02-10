import { cva, type VariantProps } from 'class-variance-authority';
import { forwardRef } from 'react';

import { Logo } from '@/components/atomos/logo/logo';
import { NavLinks } from '@/components/moleculas/navLinks/navLinks';
import { cn } from '@/utils/cn';

const headerVariants = cva(
  'sticky top-0 z-50 w-full border-b transition-colors',
  {
    variants: {
      variant: {
        default: 'bg-white border-gray-200 text-gray-900',
        dark: 'bg-gray-900 border-gray-800 text-white',
      },
      size: {
        desktop: 'h-20 px-4 md:px-8 lg:px-16',
        tablet: 'h-16 px-4 md:px-6',
        mobile: 'h-14 px-4',
      },
      fixed: {
        true: 'fixed top-0',
        false: 'relative',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'desktop',
      fixed: false,
    },
  },
);

export interface HeaderProps
  extends
    React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof headerVariants> {
  logoHref?: string;
}

const Header = forwardRef<HTMLElement, HeaderProps>(
  ({ className, variant, size, fixed, logoHref = '/', ...props }, ref) => {
    return (
      <header
        ref={ref}
        className={cn(headerVariants({ variant, size, fixed }), className)}
        {...props}
      >
        <div className="container mx-auto flex h-full items-center justify-between">
          <div className="flex items-center">
            <Logo href={logoHref} variant={variant} />
          </div>

          <nav className="hidden md:block">
            <NavLinks variant="horizontal" align="right" />
          </nav>

          {/* implementar depois*/}
          <button className="md:hidden"></button>
        </div>
      </header>
    );
  },
);

Header.displayName = 'Header';

export { Header, headerVariants };
