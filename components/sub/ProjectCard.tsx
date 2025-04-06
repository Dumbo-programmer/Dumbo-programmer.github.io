import Image from "next/image";

interface Props {
  src: string;
  title: string;
  description: string;
  type?: "image" | "video"; // default to image
}

const ProjectCard = ({ src, title, description, type = "image" }: Props) => {
  return (
    <div className="relative h-[450px] w-full max-w-sm overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] flex flex-col">
      
      {/* Media Section */}
      <div className="h-[200px] w-full flex justify-center items-center overflow-hidden bg-black">
        {type === "video" ? (
          <video
            src={src}
            className="object-contain h-full"
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
            className="object-contain h-full"
          />
        )}
      </div>

      {/* Text Section */}
      <div className="p-4 flex-1 overflow-hidden flex flex-col">
        <h1 className="text-xl font-semibold text-white truncate">{title}</h1>
        <p className="mt-2 text-gray-300 text-sm overflow-hidden text-ellipsis line-clamp-4">
          {description}
        </p>
      </div>
    </div>
  );
};

export default ProjectCard;
