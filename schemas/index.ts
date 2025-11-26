import page from "./page";
import heroSection from "./heroSection";
import uspSection from "./uspSection";
import stepsSection from "./stepsSection";
import faqSection from "./faqSection";
import trustpilotSection from "./trustpilotSection";
import applyNowSection from "./applyNowSection";
import aboutUsSection from "./aboutUsSection";
import ctaProductsSection from "./ctaProductsSection";
import blogPostSection from "./blogPostSection";
import videoSection from "./videoSection";
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
  stepsSection,
  faqSection,
  trustpilotSection,
  applyNowSection,
  aboutUsSection, 
  ctaProductsSection, 
  blogPostSection,
  videoSection,
  seo,
  settings,
  // Tilføj evt. blog schemas her senere:
  // post,
  // blockContent,
];
