import { ComponentProps } from 'react';
import { Spinner } from './Spinner';
import { cn } from '../../app/utils/cn';

interface ButtonProps extends ComponentProps<'button'> {
  isLoading?: boolean;
}
export function SubmitButton({
  className,
  isLoading,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      {...props}
      disabled={isLoading}
      className={cn(
        'flex items-center justify-center px-6 h-12 rounded-2xl text-white  font-semibold  disabled:cursor-not-allowed transition-all',
        className
      )}
    >
      {!isLoading && children}
      {isLoading && <Spinner className="w-6 h-6" />}
    </button>
  );
}
