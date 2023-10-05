import { RxStarFilled } from 'react-icons/rx';
import { FcGoogle } from 'react-icons/fc';

interface ReviewCardProps {
  name: string;

  date: string;

  description: string;
}

export function ReviewCard({ name, date, description }: ReviewCardProps) {
  return (
    <div className="flex flex-col whitespace-pre-wrap bg-white px-6 py-4 max-w-[310px] rounded-xl">
      <h2 className="font-bold">{name}</h2>

      <div className="flex items-center justify-between mt-4 flex-wrap gap-y-4">
        <div className="text-3xl flex gap-2">
          <FcGoogle />
          <span className="text-lg text-gray-600">{date}</span>
        </div>
        <div className="text-yellow-500 text-lg flex gap-1 ml-1">
          <RxStarFilled />
          <RxStarFilled />
          <RxStarFilled />
          <RxStarFilled />
          <RxStarFilled />
        </div>
      </div>
      <p className="mt-6 text-[15px] text-left flex-grow overflow-hidden overflow-ellipsis">
        {description}
      </p>
    </div>
  );
}
