import { ComponentProps } from 'react';
import { cn } from '../../app/utils/cn';

interface ButtonProps extends ComponentProps<'button'> {}
export function Button({ className, ...props }: ButtonProps) {
  return (
    <button
      {...props}
      className={cn(
        'bg-pink-0 hover:bg-teal-800 flex items-center justify-center px-6 h-12 rounded-2xl text-white  font-semibold  disabled:cursor-not-allowed transition-all active:bg-teal-900',
        className
      )}
    >
      Contact us
    </button>
  );
}
