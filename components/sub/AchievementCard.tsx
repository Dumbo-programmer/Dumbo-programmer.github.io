import ContentCard, { MediaPanel } from "@/components/ui/ContentCard";

interface Props {
  src: string;
  title: string;
  description: string;
  typeA?: "image" | "video";
  link?: string;
}

const AchievementCard = ({
  src,
  title,
  description,
  typeA = "image",
  link,
}: Props) => (
  <ContentCard
    title={title}
    href={link}
    ariaLabel={`View ${title} achievement details`}
    media={<MediaPanel src={src} typeA={typeA} alt={`${title} achievement`} />}
  >
    <div className="flex flex-1 flex-col p-5">
      <h3 className="text-base font-semibold leading-snug text-white">{title}</h3>
      <p className="mt-3 line-clamp-4 text-sm leading-relaxed text-gray-300">
        {description}
      </p>
    </div>
  </ContentCard>
);

export default AchievementCard;
