import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/utils/cn'
import { Logo } from '@/components/atomos/logo/logo'
import { NavLinks } from '@/components/moleculas/navLinks/navLinks'


const headerVariants = cva('grid grid-cols-1 md:grid-cols-2 items-center justify-center', {
  variants: {
    variant: {
      default: 'bg-white text-black',
      dark: 'bg-black text-white',
    },
    size: {
      desktop: 'h-20 px-8',
      tablet: 'h-16 px-6',
      mobile: 'h-14 px-4',
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'desktop',
  },
})

export interface HeaderProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof headerVariants> {}

const Header = React.forwardRef<HTMLElement, HeaderProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <header
        ref={ref}
        className={cn(headerVariants({ variant, size }), className)}
        {...props}
      >
        
        <div>
            <Logo/>
        </div>
        <div className='flex flex-col items-end'>
            <ul className='flex flex-row gap-4'>
               <NavLinks variant='horizontal'/>
            </ul>
        </div>
       
      </header>
    )
  }
)

Header.displayName = 'Header'

export { Header, headerVariants }
