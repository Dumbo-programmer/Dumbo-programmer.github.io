import Image from "next/image";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import GalleryCarousel from "@/components/sub/GalleryCarousel";
import { gallerySlides } from "@/constants/education";
import {
  allPhotos,
  personalPhotos,
  sessionPhotos,
  type GalleryPhoto,
} from "@/constants/gallery";

const SITE_URL = "https://tawhid.is-a.dev";

const imageObject = (photo: GalleryPhoto) => ({
  "@type": "ImageObject",
  "@id": `${SITE_URL}${photo.src}#image`,
  name: photo.title,
  description: photo.caption,
  caption: photo.alt,
  url: `${SITE_URL}${photo.src}`,
  contentUrl: `${SITE_URL}${photo.src}`,
  width: photo.width,
  height: photo.height,
  keywords: photo.keywords.join(", "),
  creditText: "Tawhid Bin Omar",
  copyrightNotice: "© 2026 Tawhid Bin Omar. All rights reserved.",
  license: `${SITE_URL}/license`,
  acquireLicensePage: `${SITE_URL}/license`,
  creator: { "@id": `${SITE_URL}/#person` },
});

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ImageGallery",
  "@id": `${SITE_URL}/#gallery`,
  name: "Tawhid Bin Omar — STEM Teaching and Outreach Photo Gallery",
  description:
    "Portraits of Tawhid Bin Omar and photos from mathematics, physics, and STEM teaching sessions and outreach events in Bangladesh.",
  url: `${SITE_URL}/#gallery`,
  image: allPhotos.map(imageObject),
  about: { "@id": `${SITE_URL}/#person` },
  creator: { "@id": `${SITE_URL}/#person` },
  keywords:
    "Tawhid Bin Omar, STEM education Bangladesh, mathematics workshop, physics outreach, Olympiad mentorship, Josephite Math Club",
  inLanguage: "en",
};

interface PhotoCardProps {
  photo: GalleryPhoto;
  eager?: boolean;
}

const PhotoCard = ({ photo, eager = false }: PhotoCardProps) => (
  <figure className="group overflow-hidden rounded-2xl border border-line bg-white/5 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-line-accent/60 hover:shadow-glow">
    <a
      href={photo.src}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Open full-size image: ${photo.alt}`}
      className="block"
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-black/60">
        <Image
          src={photo.src}
          alt={photo.alt}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-contain p-2 transition-transform duration-500 group-hover:scale-[1.03]"
          loading={eager ? "eager" : "lazy"}
        />
      </div>
    </a>
  </figure>
);

interface PhotoGridProps {
  id: string;
  title?: string;
  description?: string;
  photos: GalleryPhoto[];
}

const PhotoGrid = ({ id, title, description, photos }: PhotoGridProps) => (
  <section
    id={id}
    aria-labelledby={title ? `${id}-heading` : undefined}
    aria-label={title ? undefined : "Portrait photos"}
    className="scroll-mt-36"
  >
    {title && (
      <h3 id={`${id}-heading`} className="subhead mb-3 text-center">
        {title}
      </h3>
    )}
    {description && (
      <p className="section-subtitle mx-auto mb-8 max-w-2xl text-center text-sm">
        {description}
      </p>
    )}
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
      {photos.map((photo, index) => (
        <PhotoCard key={photo.src} photo={photo} eager={index === 0} />
      ))}
    </div>
  </section>
);

const PhotoGallery = () => {
  return (
    <section
      className="w-full py-16 sm:py-20"
      id="gallery"
      aria-labelledby="gallery-heading"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="section-shell">
        <SectionHeading
          id="gallery-heading"
          eyebrow="Gallery"
          title="Teaching, Mentoring, and Problem Solving in Action"
          description="A visual archive of portraits and STEM outreach sessions from Dhaka, Bangladesh — with descriptive captions and full-resolution images for every photo."
          className="mb-12"
        />

        <Reveal delay={0.04}>
          <section aria-label="Featured outreach sessions" className="mb-16">
            <h3 className="subhead mb-6 text-center">Featured Sessions</h3>
            <GalleryCarousel slides={gallerySlides} />
          </section>
        </Reveal>

        <div className="space-y-16">
          <Reveal delay={0.08}>
            <PhotoGrid id="portrait-photos" photos={personalPhotos} />
          </Reveal>

          <Reveal delay={0.12}>
            <PhotoGrid
              id="outreach-photos"
              title="Classroom & Outreach Sessions"
              description="Mathematics, physics, and STEM teaching sessions with students in Bangladesh, including classroom workshops and national math events."
              photos={sessionPhotos}
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default PhotoGallery;
