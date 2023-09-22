import { cn } from '../../app/utils/cn';

interface ServicesCardProps {
  title: string;
  icon: string;
  description: string;

  iconPosition?: string;
}

export function ServicesCard({
  title,
  icon,
  description,
  iconPosition
}: ServicesCardProps) {
  return (
    <div className="bg-white w-1/2 font-medium text-xl h-fit px-4 py-6 md:px-8 md:py-10 rounded-[30px] whitespace-pre-wrap flex flex-col justify-between flex-grow relative">
      <img
        src={icon}
        alt="Icon"
        className={cn(
          'w-16 mb-2 md:w-14 absolute right-0 top-[-30px]',
          iconPosition
        )}
      />
      <h2 className="text-2xl my-2 font-bold md:text-2xl">{title}</h2>
      <p className="text-md md:text-base overflow-hidden overflow-ellipsis">
        {description}
      </p>
    </div>
  );
}
