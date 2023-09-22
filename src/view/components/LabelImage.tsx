interface LabelImageProps {
  src: string;
  text: string;
}

export function LabelImage({ text, src }: LabelImageProps) {
  return (
    <div className="relative w-[400px]">
      <img src={src} alt="Cleaning image" className="rounded-lg" />
      <span className="absolute text-md top-2 left-2 text-red-500 stroke-white font-bold lg:text-lg">
        {text}
      </span>
    </div>
  );
}
