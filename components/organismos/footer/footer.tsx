import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/utils/cn'
import { Logo } from '@/components/atomos/logo/logo'
import { NavLinks } from '@/components/moleculas/navLinks/navLinks'


const footerVariants = cva('grid items-center justify-center', {
    variants: {
        variant: {
            default: 'bg-white text-black',
            dark: 'bg-black text-white',
        },
        size: {
            desktop: 'px-8 grid-cols-3',
            tablet: 'px-6 grid-cols-2',
            mobile: 'px-4 grid-cols-1',
        },
    },
    defaultVariants: {
        variant: 'default',
        size: 'desktop',
    },
})

export interface FooterProps
    extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof footerVariants> { }

const Footer = React.forwardRef<HTMLElement, FooterProps>(
    ({ className, variant, size, ...props }, ref) => {
        return (
            <footer>
                <div 
                    className={cn(footerVariants({ variant, size }), className)} 
                    {...props}>
                    <div className='flex flex-col'>
                        <Logo />
                        <span>Redes</span>
                    </div>
                    <div>
                        <h1>Links</h1>
                       
                       <NavLinks variant='vertical'/>
                    </div>
                    <div>
                        <h1>Contato</h1>
                        <p>Email</p>
                        <p>Telefone</p>

                    </div>
                </div>
                <span className='w-full flex items-center justify-center'>@copy Guilherme Abatemarco</span>

            </footer>
        )
    }
)

Footer.displayName = 'Footer'

export { Footer, footerVariants }
