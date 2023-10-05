import { ComponentProps } from 'react';
import { cn } from '../../app/utils/cn';

interface ButtonProps extends ComponentProps<'button'> {}
export function Button({ className, ...props }: ButtonProps) {
  return (
    <a href="https://w.app/monalizacleaningservices" target="_blank">
      <button
        {...props}
        className={cn(
          'bg-blue-0 hover:bg-[#1B2F66] flex items-center justify-center px-6 h-12 rounded-2xl text-white  font-semibold  disabled:cursor-not-allowed transition-all active:bg-teal-900',
          className
        )}
      >
        Contact us
      </button>
    </a>
  );
}
