import { cva, type VariantProps } from 'class-variance-authority';
import Image, { StaticImageData } from 'next/image';
import * as React from 'react';

import { cn } from '@/utils/cn';

const bookCardVariants = cva(
  'flex rounded-xl bg-primary-foreground transition-all overflow-hidden',
  {
    variants: {
      variant: {
        vertical: 'flex-col hover:shadow-lg',
        horizontal: 'flex-row hover:shadow-md',
      },
      size: {
        sm: 'p-3 gap-2',
        md: 'p-4 gap-4',
        lg: 'p-6 gap-6',
      },
    },
    defaultVariants: {
      variant: 'vertical',
      size: 'md',
    },
  },
);

export interface BookCardProps
  extends
    React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof bookCardVariants> {}

const BookCardRoot = React.forwardRef<HTMLDivElement, BookCardProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(bookCardVariants({ variant, size }), className)}
        {...props}
      />
    );
  },
);

BookCardRoot.displayName = 'BookCard';

interface BookCardImageProps extends React.HTMLAttributes<HTMLDivElement> {
  src: StaticImageData | string;
  alt: string;
}

const BookCardImage = React.forwardRef<
  HTMLDivElement,
  BookCardImageProps & {
    variant?: 'vertical' | 'horizontal';
  }
>(({ className, src, alt, variant = 'vertical', ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        'relative overflow-hidden',
        variant === 'vertical' ? 'w-full aspect-[3/4]' : 'w-40 aspect-[3/4]',
        className,
      )}
      {...props}
    >
      <Image src={src} alt={alt} fill className="object-cover" />
    </div>
  );
});

BookCardImage.displayName = 'BookCard.Image';

const BookCardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn('flex flex-col gap-2', className)}
      {...props}
    />
  );
});

BookCardHeader.displayName = 'BookCard.Header';

const BookCardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn('flex flex-col gap-2', className)}
      {...props}
    />
  );
});

BookCardContent.displayName = 'BookCard.Content';

const BookCardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  return <div ref={ref} className={cn('mt-auto pt-2', className)} {...props} />;
});

BookCardFooter.displayName = 'BookCard.Footer';

export const BookCard = Object.assign(BookCardRoot, {
  Image: BookCardImage,
  Header: BookCardHeader,
  Content: BookCardContent,
  Footer: BookCardFooter,
});
