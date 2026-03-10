import type { VariantProps } from 'class-variance-authority';
import type { ComponentProps } from 'react';
import { Button as BaseButton, buttonVariants } from '../ui/button';
import { cn } from '@/lib/utils';
import type { LucideIcon } from 'lucide-react';

export default function Button({
  children,
  leftIcon: LeftIcon,
  rightIcon: RightIcon,
  className,
  ...props
}: ComponentProps<typeof BaseButton> &
  VariantProps<typeof buttonVariants> & { leftIcon?: LucideIcon; rightIcon?: LucideIcon }) {
  return (
    <BaseButton
      {...props}
      className={cn(
        'group font-general bg-electric-violet relative z-10 inline-flex w-fit overflow-hidden rounded-full px-7 py-4 text-xs text-black uppercase',
        className,
      )}
    >
      <span className="flex-center gap-2">
        {LeftIcon && <LeftIcon />}
        {children}
        {RightIcon && <RightIcon />}
      </span>
    </BaseButton>
  );
}
