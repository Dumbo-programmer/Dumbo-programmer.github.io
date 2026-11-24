import ContentCard, { Chip, MediaPanel } from "@/components/ui/ContentCard";

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

const statusColors: Record<string, string> = {
  published: "bg-green-500/20 text-green-300",
  preprint: "bg-yellow-500/20 text-yellow-300",
  submitted: "bg-blue-500/20 text-blue-300",
  "in-progress": "bg-gray-500/20 text-gray-300",
};

const ResearchCard = ({
  src,
  title,
  sub,
  description,
  typeA = "image",
  tags = [],
  link = "#",
  status,
  doi,
  date,
  citations,
}: Props) => (
  <ContentCard
    title={title}
    href={link}
    ariaLabel={`View ${title} - ${sub}`}
    media={
      <MediaPanel src={src} typeA={typeA} alt={`${title} by Tawhid Bin Omar`} />
    }
  >
    <div className="flex flex-1 flex-col p-5">
      <h3 className="text-base font-semibold leading-snug text-white">{title}</h3>
      <div className="mt-2 flex flex-wrap items-center gap-2">
        <p className="text-xs text-gray-400">Role: {sub}</p>
        {status && (
          <span
            className={`rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider ${
              statusColors[status] ?? statusColors["in-progress"]
            }`}
          >
            {status === "in-progress" ? "In Progress" : status}
          </span>
        )}
      </div>

      {date && <p className="mt-1 text-[11px] text-gray-500">{date}</p>}

      {tags.length > 0 && (
        <div className="mt-3 flex flex-wrap gap-1.5">
          {tags.map((tag, index) => (
            <Chip key={index} accent>
              {tag}
            </Chip>
          ))}
        </div>
      )}

      <p className="mt-3 line-clamp-4 text-sm leading-relaxed text-gray-300">
        {description}
      </p>

      {(doi || (citations !== undefined && citations > 0)) && (
        <div className="mt-auto flex flex-wrap items-center gap-3 border-t border-white/5 pt-4">
          {doi && (
            <span className="font-mono text-[11px] text-blue-400">
              DOI: {doi}
            </span>
          )}
          {citations !== undefined && citations > 0 && (
            <span className="text-[11px] text-cyan-400">
              {citations} citation{citations !== 1 ? "s" : ""}
            </span>
          )}
        </div>
      )}
    </div>
  </ContentCard>
);

export default ResearchCard;
