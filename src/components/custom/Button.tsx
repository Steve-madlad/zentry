import type { VariantProps } from 'class-variance-authority';
import type { ComponentProps } from 'react';
import { Button as BaseButton, buttonVariants } from '../ui/button';
import { cn } from '@/lib/utils';
import type { LucideIcon } from 'lucide-react';

export default function Button({
  children,
  shiftAnimation = true,
  className,
  ...props
}: ComponentProps<typeof BaseButton> &
  VariantProps<typeof buttonVariants> & { shiftAnimation?: boolean }) {
  return (
    <BaseButton
      {...props}
      className={cn(
        'group font-general bg-electric-violet relative z-10 inline-flex w-fit overflow-hidden rounded-full px-7 py-4 text-xs text-black uppercase',
        className,
      )}
    >
      <span className="flex-center gap-2">
        {shiftAnimation ? (
          <>
            <div className="flex-center translate-y-0 skew-y-0 gap-2 transition duration-500 group-hover:translate-y-[-240%] group-hover:skew-y-12">
              {children}
            </div>
            <div className="flex-center absolute translate-y-[230%] skew-y-12 gap-2 transition duration-500 group-hover:translate-y-0 group-hover:skew-y-0">
              {children}
            </div>
          </>
        ) : (
          children
        )}
      </span>
    </BaseButton>
  );
}
