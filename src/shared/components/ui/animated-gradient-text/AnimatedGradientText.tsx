import { type ComponentPropsWithoutRef, type CSSProperties } from 'react';
import { cn } from 'src/shared/utils/cn';

export interface AnimatedGradientTextProps extends ComponentPropsWithoutRef<'span'> {
  colorFrom?: string;
  colorTo?: string;
  speed?: number;
}

export const AnimatedGradientText = ({
  children,
  className,
  colorFrom = '#009966',
  colorTo = '#008299',
  speed = 1,
  ...props
}: AnimatedGradientTextProps) => (
  <span
    className={cn(
      'animate-gradient inline bg-linear-to-r from-(--color-from) via-(--color-to) to-(--color-from) bg-size-[var(--bg-size)_100%] bg-clip-text text-transparent',
      className,
    )}
    style={
      {
        '--bg-size': `${speed * 300}%`,
        '--color-from': colorFrom,
        '--color-to': colorTo,
      } as CSSProperties
    }
    {...props}
  >
    {children}
  </span>
);
