import { cva, type VariantProps } from 'class-variance-authority';
import Image from 'next/image';
import Link from 'next/link';
import { forwardRef } from 'react';
import { cn } from '@/utils/cn';
import LogoSVG from '@/public/logo/logo.svg'

const logoVariants = cva('transition-all duration-300', {
  variants: {
    variant: {
      default: '',
      dark: 'dark:invert',
      mono: 'grayscale',
    },
    size: {
      sm: 'h-8 w-auto',
      md: 'h-12 w-auto',
      lg: 'h-16 w-auto',
      xl: 'h-20 w-auto',
    },
    hover: {
      true: 'hover:opacity-80',
      false: '',
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'md',
    hover: true,
  },
});

export interface LogoProps
  extends
    Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'href'>,
    VariantProps<typeof logoVariants> {
  href?: string;
  src?: string;
  alt?: string;
  width?: number;
  height?: number;
  asLink?: boolean;
}

const Logo = forwardRef<HTMLAnchorElement, LogoProps>(
  (
    {
      className,
      variant,
      size,
      hover,
      href = '/',
      src = LogoSVG,
      alt = 'Logo',
      width,
      height,
      asLink = true,
      ...props
    },
    ref,
  ) => {
    const getSize = (size: LogoProps['size']) => {
      switch (size) {
        case 'sm':
          return { width: 120, height: 40 };
        case 'md':
          return { width: 160, height: 53 };
        case 'lg':
          return { width: 200, height: 67 };
        case 'xl':
          return { width: 240, height: 80 };
        default:
          return { width: 160, height: 53 };
      }
    };

    const imageSize = getSize(size);
    const finalWidth = width || imageSize.width;
    const finalHeight = height || imageSize.height;

    const logoImage = (
      <Image
        src={src}
        alt={alt}
        width={finalWidth}
        height={finalHeight}
        className={cn(logoVariants({ variant, size, hover }), className)}
        priority={size === 'xl' || size === 'lg'}
      />
    );

    if (!asLink) {
      return logoImage;
    }

    return (
      <Link
        href={href}
        ref={ref}
        aria-label={`${alt} - Ir para página inicial`}
        {...props}
      >
        {logoImage}
      </Link>
    );
  },
);

Logo.displayName = 'Logo';

export { Logo };
