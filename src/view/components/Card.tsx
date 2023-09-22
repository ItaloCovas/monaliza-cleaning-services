interface CardProps {
  src: string;
  title: string;
  description: string;
}

export function Card({ src, title, description }: CardProps) {
  return (
    <div className="bg-white max-w-[300px] h-[340px] px-4 py-6 md:px-8 md:py-10 rounded-[20px] whitespace-pre-wrap flex flex-col flex-grow ">
      <img src={src} alt="Icon" className="w-12 mb-2 md:w-16" />
      <h2 className="text-lg my-2 font-bold md:text-2xl">{title}</h2>
      <p className="text-md md:text-base overflow-hidden overflow-ellipsis">
        {description}
      </p>
    </div>
  );
}
