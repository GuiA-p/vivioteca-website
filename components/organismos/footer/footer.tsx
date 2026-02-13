import { cva, type VariantProps } from 'class-variance-authority';
import { forwardRef } from 'react';

import { Logo } from '@/components/atomos/logo/logo';
import { SocialLinks } from '@/components/moleculas/socialLinks/socialLinks';
import { cn } from '@/utils/cn';

const footerVariants = cva('w-full border-t', {
  variants: {
    variant: {
      default: 'bg-white border-gray-200 text-gray-900',
      dark: 'bg-gray-900 border-gray-800 text-white',
    },
    size: {
      desktop: 'pt-8 md:pt-12 px-4 md:px-8 lg:px-16',
      tablet: 'pt-6 px-4 md:px-6',
      mobile: 'pt-4 px-4',
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'desktop',
  },
});

export interface FooterProps
  extends
    React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof footerVariants> {
  copyright?: string;
}

const Footer = forwardRef<HTMLElement, FooterProps>(
  (
    {
      className,
      variant,
      size,
      copyright = `© ${new Date().getFullYear()} Guilherme Abatemarco. Todos os direitos reservados.`,
      ...props
    },
    ref,
  ) => {
    return (
      <footer
        ref={ref}
        className={cn(footerVariants({ variant, size }), className)}
        {...props}
      >
        <div className="container mx-auto">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="flex flex-col space-y-4">
              <Logo variant={variant} size={'lg'} />
              <div>
                <div className="flex space-x-4">
                  <SocialLinks />
                </div>
              </div>
            </div>

            <div>
              <h3 className="mb-4 text-lg font-semibold">Links Rápidos</h3>
            </div>

            <div>
              <h3 className="mb-4 text-lg font-semibold">Contato</h3>
              <div className="space-y-2">
                <p className="flex items-center">exemplo@exemplo.com</p>
                <p className="flex items-center">(11) 99999-9999</p>
              </div>
            </div>
          </div>

          <div className="pt-6 text-center text-sm text-gray-500">
            {copyright}
          </div>
        </div>
      </footer>
    );
  },
);

Footer.displayName = 'Footer';

export { Footer };
