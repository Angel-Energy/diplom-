import { cva } from 'class-variance-authority';
import * as React from 'react';

import { cn } from '@/lib/utils';

const badgeVariants = cva(
  'inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
  {
    variants: {
      variant: {
        default: 'border-transparent bg-primary text-primary-foreground hover:bg-primary/80',
        secondary:
          'border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80',
        destructive:
          'border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80',
        outline: 'text-foreground',
      },
    },
    defaultVariants: { variant: 'default' },
  }
);

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'secondary' | 'destructive' | 'outline' | string;
  className?: string;
  children?: React.ReactNode;
}

function Badge({ className, variant = 'default', children, ...props }: BadgeProps) {
  const hasColorOverride = className?.includes('bg-') || className?.includes('text-');
  const finalVariant = hasColorOverride ? undefined : variant;

  return (
    <div className={cn(badgeVariants({ variant: finalVariant }), className)} {...props}>
      {children}
    </div>
  );
}

export { Badge, badgeVariants };
