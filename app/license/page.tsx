import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Image Usage and Licensing",
  description: "Image usage, attribution, and licensing information for Tawhid Bin Omar's website.",
  alternates: {
    canonical: "https://tawhid.is-a.dev/license",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function LicensePage() {
  return (
    <main className="min-h-screen w-full px-6 py-32">
      <article className="mx-auto max-w-3xl text-gray-200">
        <h1 className="mb-6 text-4xl font-bold text-white">Image Usage and Licensing</h1>
        <p className="mb-6 leading-7">
          Unless a different source or license is stated, images on this website are
          owned by Tawhid Bin Omar and are protected by applicable copyright law.
        </p>
        <p className="mb-6 leading-7">
          To request permission to reproduce an image, contact{" "}
          <a
            className="text-cyan-300 underline"
            href="mailto:tawhidbinomar@gmail.com"
          >
            tawhidbinomar@gmail.com
          </a>
          {" "}with the image URL and your intended use.
        </p>
        <p className="leading-7">
          When permission is granted, credit the image as “Tawhid Bin Omar” and link
          back to the original image page on this website.
        </p>
      </article>
    </main>
  );
}
