import React from "react";

interface Props {
  title: React.ReactNode;
  description?: React.ReactNode;
  eyebrow?: string;
  id?: string;
  align?: "center" | "left";
  as?: "h2" | "h3";
  className?: string;
  descriptionClassName?: string;
}

/** One heading treatment for every section: solid title, quiet supporting copy. */
const SectionHeading = ({
  title,
  description,
  eyebrow,
  id,
  align = "center",
  as: Heading = "h2",
  className = "",
  descriptionClassName = "",
}: Props) => (
  <div
    className={`${align === "center" ? "text-center" : "text-left"} ${className}`}
  >
    {eyebrow && (
      <div className={`mb-4 flex ${align === "center" ? "justify-center" : "justify-start"}`}>
        <span className="eyebrow">{eyebrow}</span>
      </div>
    )}
    <Heading id={id} className="section-title">
      {title}
    </Heading>
    {description && (
      <p
        className={`section-subtitle ${
          align === "center" ? "mx-auto" : ""
        } ${descriptionClassName}`}
      >
        {description}
      </p>
    )}
  </div>
);

export default SectionHeading;
