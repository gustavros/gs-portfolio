interface CardTechsProps {
  techonology: string;
  image: {
    src: string;
    width?: number;
    height?: number;
  };
}

export default function CardTechs({ techonology, image }: CardTechsProps) {
  return (
    <div className="flex gap-4 flex-col items-center justify-center border border-zinc-800 rounded p-4 cursor-pointer">
      <img
        src={image.src}
        width={image.width || 100}
        height={image.height || 100}
        alt={techonology}

        className="dark:filter dark:invert hover:scale-110 transition-all duration-200"
      />
      <p className="text-center">{techonology}</p>
    </div>
  );
}
