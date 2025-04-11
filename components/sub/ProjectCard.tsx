import Image from "next/image";

interface Props {
  src: string;
  title: string;
  description: string;
  typeA?: "image" | "video";
  tags?: string[];
  link?: string;
}

const ProjectCard = ({ src, title, description, typeA = "image", tags = [], link = "#" }: Props) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="relative h-auto w-full max-w-sm overflow-hidden rounded-lg border border-[#2A0E61] flex flex-col bg-white/5 backdrop-blur-md transition-all duration-300 hover:shadow-[0_0_25px_#8b5cf6] hover:scale-105"
    >
      {/* Media Section */}
      <div className="h-[200px] w-full flex justify-center items-center overflow-hidden bg-black">
        {typeA === "video" ? (
          <video
            src={src}
            className="object-contain h-full w-full"
            controls
            muted
            loop
          />
        ) : (
          <Image
            src={src}
            alt={title}
            width={300}
            height={200}
            className="object-contain h-full w-full"
          />
        )}
      </div>

      {/* Text Section */}
      <div className="p-4 flex-1 flex flex-col">
        <h1 className="text-xl font-semibold text-white mb-2">{title}</h1>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="bg-purple-700/30 text-purple-300 text-xs px-2 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        <p className="text-gray-300 text-sm">{description}</p>
      </div>
    </a>
  );
};

export default ProjectCard;
