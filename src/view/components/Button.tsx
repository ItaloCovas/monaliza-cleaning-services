import { ComponentProps } from 'react';
import { cn } from '../../app/utils/cn';
import { useWindowWidth } from '../../app/hooks/useWindowWidth';

interface ButtonProps extends ComponentProps<'button'> {}
export function Button({ className, ...props }: ButtonProps) {
  const windowWidth = useWindowWidth();

  return (
    <div>
      {windowWidth < 600 ? (
        <a href="tel:+18608601358">
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
      ) : (
        <a href="mailto:testexx@gmail.com">
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
      )}
    </div>
  );
}
