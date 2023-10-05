interface CardProps {
  src: string;
  title: string;
  description: string;
}

export function Card({ src, title, description }: CardProps) {
  return (
    <div className="bg-white max-w-[300px] h-[340px] relative px-4 py-6 md:px-8 md:py-8 md:pt-4 rounded-[20px] whitespace-pre-wrap flex flex-col">
      <img
        src={src}
        alt="Icon"
        className="w-10 h-10 mb-2 md:w-16 absolute bottom-2 right-4 md:right-0"
      />
      <h2 className="text-lg my-2 font-bold md:text-xl">{title}</h2>
      <p className="text-md md:text-base overflow-hidden overflow-ellipsis">
        {description}
      </p>
    </div>
  );
}
