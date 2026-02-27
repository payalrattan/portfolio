import React from "react";
import { textStyles, textWidths, textAlignment } from "../../config/textStyles";

const TextElement = ({
  title,
  description,
  className = "",
  titleWidth = "normal",
  descriptionWidth = "normal",
  alignment = "center",
}) => {
  const titleWidthClass = textWidths[titleWidth] || textWidths.normal;
  const descriptionWidthClass = textWidths[descriptionWidth] || textWidths.normal;
  const textAlignmentClass = textAlignment[alignment] || textAlignment.center;

  return (
    <div className={`space-y-4 w-full ${textAlignmentClass} ${className}`}>
      <h2
        className={`${titleWidthClass} w-full mx-auto ${textStyles.heading.h1}`}
      >
        {title}
      </h2>

      <div
        className={`${descriptionWidthClass} w-full mx-auto space-y-4 ${textStyles.body.normal}`}
      >
        {description}
      </div>
    </div>
  );
};

export default TextElement;
