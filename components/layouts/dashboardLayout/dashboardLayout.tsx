import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';

import { Aside } from '@/components/organismos/aside/aside';
import { cn } from '@/utils/cn';

const dashboardLayoutVariants = cva('flex flex-col min-h-screen', {
  variants: {
    container: {
      default: 'w-full',
    },
  },
  defaultVariants: {
    container: 'default',
  },
});

export interface DashboardLayoutProps
  extends
    React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof dashboardLayoutVariants> {}

const DashboardLayout = React.forwardRef<HTMLElement, DashboardLayoutProps>(
  ({ className, container, children, ...props }, ref) => {
    return (
      <div className="flex flex-row">
        <Aside />
        <main
          ref={ref}
          className={cn(dashboardLayoutVariants({ container }), className)}
          {...props}
        >
          {children}
        </main>
      </div>
    );
  },
);

DashboardLayout.displayName = 'DashboardLayout';

export { DashboardLayout };
