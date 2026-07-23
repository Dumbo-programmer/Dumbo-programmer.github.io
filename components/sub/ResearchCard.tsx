import Image from "next/image";

interface Props {
  src: string;
  title: string;
  sub: string;
  description: string;
  typeA?: "image" | "video";
  tags?: string[];
  link?: string;
  status?: "published" | "preprint" | "in-progress" | "submitted";
  doi?: string;
  date?: string;
  citations?: number;
}

const ResearchCard = ({ src, title, sub, description, typeA = "image", tags = [], link = "#", status, doi, date, citations }: Props) => {
  const statusColors: Record<string, string> = {
    "published": "bg-green-500/20 text-green-300",
    "preprint": "bg-yellow-500/20 text-yellow-300",
    "submitted": "bg-blue-500/20 text-blue-300",
    "in-progress": "bg-gray-500/20 text-gray-300",
  };

  const statusBadge = status ? (
    <span className={`text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full font-semibold ${statusColors[status] || statusColors["in-progress"]}`}>
      {status === "in-progress" ? "In Progress" : status}
    </span>
  ) : null;

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`View ${title} - ${sub}`}
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
            preload="metadata"
            aria-label={`Video of ${title}`}
          />
        ) : (
          <Image
            src={src}
            alt={`${title} project`}
            width={300}
            height={200}
            className="object-contain h-full w-full"
            loading="lazy"
          />
        )}
      </div>

      {/* Text Section */}
      <div className="p-4 flex-1 flex flex-col">
        <div className="flex items-center gap-2 mb-1">
          <h1 className="text-xl font-semibold text-white">{title}</h1>
        </div>
        <div className="flex flex-wrap items-center gap-2 mb-2">
          <h2 className="text-xs font-light text-white">Role: {sub}</h2>
          {statusBadge}
        </div>

        {date && (
          <p className="text-gray-500 text-[11px] mb-1">{date}</p>
        )}

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
        <p className="text-gray-300 text-sm mb-3">{description}</p>

        {/* Metadata footer */}
        <div className="flex flex-wrap items-center gap-3 mt-auto">
          {doi && (
            <span className="text-[11px] text-blue-400 hover:text-blue-300 font-mono">
              DOI: {doi}
            </span>
          )}
          {citations !== undefined && citations > 0 && (
            <span className="text-[11px] text-cyan-400">
              {citations} citation{citations !== 1 ? "s" : ""}
            </span>
          )}
        </div>
      </div>
    </a>
  );
};

export default ResearchCard;
