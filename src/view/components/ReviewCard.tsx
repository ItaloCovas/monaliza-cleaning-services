import { cn } from '../../app/utils/cn';

interface ReviewCardProps {
  src: string;
  name: string;
  positive: string;

  description: string;
  service: string;

  className?: string;

  namePosition?: string;

  iconPosition?: string;
}

export function ReviewCard({
  src,
  name,
  positive,
  service,
  description,
  className,
  namePosition,
  iconPosition
}: ReviewCardProps) {
  return (
    <div
      className={cn(
        'bg-white w-fit max-w-full font-medium text-xl h-fit px-4 py-6 md:px-8 md:py-10 rounded-[30px] whitespace-pre-wrap flex flex-col justify-between flex-grow relative',
        className
      )}
    >
      <img
        src={src}
        alt="Icon"
        className={cn('w-12 mb-2 md:w-16 absolute top-[-30px]', iconPosition)}
      />
      <h2
        className={cn(
          'text-lg my-2 font-bold md:text-xl absolute top-[-35px] ml-8 lg:ml-4 overflow-hidden text-overflow-ellipsis whitespace-nowrap',
          namePosition
        )}
      >
        {name}
      </h2>
      <p className="text-lg mb-5 text-gray-700 md:text-base">
        <strong>Positive: </strong>
        {positive}
      </p>
      <p className="text-lg mb-5 md:text-base">{description}</p>
      <p className="text-lg text-gray-700 md:text-base">
        <strong>Service: </strong>
        {service}
      </p>
    </div>
  );
}
