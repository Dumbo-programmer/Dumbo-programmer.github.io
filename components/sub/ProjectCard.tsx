import ContentCard, { Chip, MediaPanel } from "@/components/ui/ContentCard";

interface Props {
  src: string;
  title: string;
  description: string;
  typeA?: "image" | "video";
  tags?: string[];
  link: string;
  purpose?: string;
  impact?: string;
  users?: string;
  className?: string;
}

const ProjectCard = ({
  src,
  title,
  description,
  typeA = "image",
  tags = [],
  link,
  purpose,
  impact,
  users,
  className,
}: Props) => (
  <ContentCard
    title={title}
    href={link}
    ariaLabel={`View ${title} project details`}
    className={className}
    media={
      <MediaPanel
        src={src}
        typeA={typeA}
        alt={`Screenshot of ${title} project by Tawhid Bin Omar`}
      />
    }
  >
    <div className="flex flex-1 flex-col p-5">
      <h3 className="text-base font-semibold leading-snug text-white">{title}</h3>

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

      {(purpose || users || impact) && (
        <div className="mt-auto space-y-1.5 border-t border-white/5 pt-4 text-xs leading-relaxed">
          {purpose && (
            <p className="text-purple-300">
              <span className="font-semibold">Why:</span> {purpose}
            </p>
          )}
          {users && (
            <p className="text-cyan-300">
              <span className="font-semibold">For:</span> {users}
            </p>
          )}
          {impact && (
            <p className="text-green-300">
              <span className="font-semibold">Impact:</span> {impact}
            </p>
          )}
        </div>
      )}
    </div>
  </ContentCard>
);

export default ProjectCard;
