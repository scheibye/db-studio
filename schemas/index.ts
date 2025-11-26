import page from "./page";
import heroSection from "./heroSection";
import uspSection from "./uspSection";
import seo from "./seo";
import settings from "./settings";

// Hvis der ligger andre schemas fra template (fx post, author, blockContent),
// så importér dem her. Du kan tilføje dem senere, hvis du ønsker blog:
// import post from "./post";
// import blockContent from "./blockContent";

export const schemaTypes = [
  page,
  heroSection,
  uspSection,
  seo,
  settings,
  // Tilføj evt. blog schemas her senere:
  // post,
  // blockContent,
];
