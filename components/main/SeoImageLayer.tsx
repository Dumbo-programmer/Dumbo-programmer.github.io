import Image from "next/image";
import { allPhotos } from "@/constants/gallery";

const SeoImageLayer = () => {
  return (
    <div aria-hidden="true">
      <div className="sr-only">
        {allPhotos.map((photo) => (
          <Image
            key={photo.src}
            src={photo.src}
            alt={photo.alt}
            title={photo.title}
            width={photo.width}
            height={photo.height}
            loading="eager"
            sizes="1px"
            className="w-px h-px"
          />
        ))}
      </div>
    </div>
  );
};

export default SeoImageLayer;
