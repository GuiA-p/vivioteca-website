import { cva, type VariantProps } from 'class-variance-authority';
import Image, { StaticImageData } from 'next/image';
import * as React from 'react';

import { Link } from '@/components/atomos/link/link';
import { Heading } from '@/components/atomos/typography/heading/heading';
import { Text } from '@/components/atomos/typography/text/text';
import { cn } from '@/utils/cn';

const bookCardVariants = cva('flex flex-col rounded-lg transition-all', {
  variants: {
    variant: {
      default: 'hover:shadow-lg',
      outlined: 'border border-border hover:shadow-md',
      ghost: 'bg-transparent hover:bg-muted/50',
    },
    size: {
      sm: 'p-3 gap-2',
      md: 'p-4 gap-3',
      lg: 'p-6 gap-4',
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'md',
  },
});

export interface BookCardProps
  extends
    React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof bookCardVariants> {
  cover: StaticImageData | string;
  title: string;
  description: string;
  href: string;
}

export const BookCard = React.forwardRef<HTMLDivElement, BookCardProps>(
  (
    { className, variant, size, cover, title, description, href, ...props },
    ref,
  ) => {
    return (
      <div
        ref={ref}
        className={cn(bookCardVariants({ variant, size }), className)}
        {...props}
      >
        <Image
          src={cover}
          alt={title}
          className="rounded-md object-cover"
          width={250}
          height={350}
        />

        <Heading level="h5">{title}</Heading>

        <Text>{description}</Text>

        <Link href={href}>Ver Livro</Link>
      </div>
    );
  },
);

BookCard.displayName = 'BookCard';
