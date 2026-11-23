'use client';

import { Moon, Sun } from 'lucide-react';
import { type ComponentPropsWithoutRef, useEffect, useRef, useState } from 'react';
import { flushSync } from 'react-dom';
import { cn } from 'src/shared/utils/cn';
import { runThemeTransition, type ThemeAnimationType } from './runThemeTransition';

interface ToggleThemeProps extends ComponentPropsWithoutRef<'div'> {
  animationType?: ThemeAnimationType;
  duration?: number;
}

export const ToggleTheme = ({
  animationType = 'circle-spread',
  className,
  duration = 400,
  ...props
}: ToggleThemeProps) => {
  const [isDark, setIsDark] = useState(false);
  const buttonRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateTheme = () => {
      setIsDark(document.documentElement.classList.contains('dark'));
    };

    updateTheme();

    const observer = new MutationObserver(updateTheme);

    observer.observe(document.documentElement, {
      attributeFilter: ['class'],
      attributes: true,
    });

    return () => observer.disconnect();
  }, []);

  const toggleTheme = async () => {
    const element = buttonRef.current;

    if (!element) return;

    await document.startViewTransition(() => {
      flushSync(() => {
        const nextThemeIsDark = !isDark;

        setIsDark(nextThemeIsDark);
        document.documentElement.classList.toggle('dark');
        localStorage.setItem('theme', nextThemeIsDark ? 'dark' : 'light');
      });
    }).ready;

    runThemeTransition({ animationType, duration, element });
  };

  return (
    <>
      <div
        className={cn(
          'p-2 rounded-full transition-colors duration-300 absolute inset-0 cursor-pointer flex items-center justify-center',
          className,
        )}
        onClick={toggleTheme}
        ref={buttonRef}
        {...props}
      >
        {isDark ? (
          <Sun className='text-neutral-500 dark:text-neutral-300' />
        ) : (
          <Moon className='text-neutral-500 dark:text-neutral-300' />
        )}
      </div>

      {animationType !== 'flip-x-in' && (
        <style
          dangerouslySetInnerHTML={{
            __html: `
              ::view-transition-old(root),
              ::view-transition-new(root) {
                animation: none;
                mix-blend-mode: normal;
              }
            `,
          }}
        />
      )}
    </>
  );
};
