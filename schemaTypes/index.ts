import { aboutSectionType } from './blocks/aboutSectionType'
import { ctaImagePatternSectionType } from './blocks/cta/ctaImagePatternSectionType'
import { ctaImageSectionType } from './blocks/cta/ctaImageSectionType'
import { ctaSmallSectionType } from './blocks/cta/ctaSmallSectionType'
import { ctaTelSectionType } from './blocks/cta/ctaTelSectionType'
import { ctaVideoSectionType } from './blocks/cta/ctaVideoSectionType'
import { faqSectionType } from './blocks/faqSectionType'
import { helpCardsSectionType } from './blocks/helpCardsSectionType'
import { imageHeroSectionType } from './blocks/hero/imageHeroSectionType'
import { mainHeroSectionType } from './blocks/hero/mainHeroSectionType'
import { simpleHeroSectionType } from './blocks/hero/simpleHeroSectionType'
import { missionSectionType } from './blocks/missionSectionType'
import { socialProofSectionType } from './blocks/socialProofSectionType'
import { stepsSectionType } from './blocks/stepsSectionType'
import { teamSectionType } from './blocks/teamSectionType'
import { textWithVideoSectionType } from './blocks/textWithVideoSectionType'
import { footerType } from './layout/footerType'
import { headerType } from './layout/headerType'
import { authorType } from './pages/blog/authorType'
import { blogIndexType } from './pages/blog/blogIndexType'
import { categoryType } from './pages/blog/categoryType'
import { postType } from './pages/blog/postType'
import { pageBuilderType } from './pages/pageBuilderType'
import { pageType } from './pages/pageType'
import { ctaButtonType } from './shared/ctaButtonType'
import { linkType } from './shared/linkType'
import { navLinkType } from './shared/navLinkType'
import { seoType } from './shared/seoType'
import { siteSettingsType } from './siteSettingsType'
import type { SchemaTypeDefinition } from 'sanity'

export const schema: { types: Array<SchemaTypeDefinition> } = {
  types: [
    // Pages
    pageType,
    pageBuilderType,

    // Blog
    blogIndexType,
    postType,
    authorType,
    categoryType,

    // Layout
    headerType,
    footerType,

    // Blocks
    mainHeroSectionType,
    simpleHeroSectionType,
    imageHeroSectionType,
    ctaSmallSectionType,
    ctaVideoSectionType,
    ctaImageSectionType,
    ctaImagePatternSectionType,
    ctaTelSectionType,
    stepsSectionType,
    faqSectionType,
    socialProofSectionType,
    aboutSectionType,
    helpCardsSectionType,
    textWithVideoSectionType,
    missionSectionType,
    teamSectionType,

    // Site settings
    siteSettingsType,

    // Shared helper types
    ctaButtonType,
    linkType,
    navLinkType,
    seoType,
  ],
}
