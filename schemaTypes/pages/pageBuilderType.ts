import { defineArrayMember, defineType } from 'sanity'

export const pageBuilderType = defineType({
  name: 'pageBuilder',
  type: 'array',
  of: [
    defineArrayMember({ type: 'mainHeroSection' }),
    defineArrayMember({ type: 'simpleHeroSection' }),
    defineArrayMember({ type: 'imageHeroSection' }),
    defineArrayMember({ type: 'ctaVideoSection' }),
    defineArrayMember({ type: 'ctaSmallSection' }),
    defineArrayMember({ type: 'ctaImageSection' }),
    defineArrayMember({ type: 'ctaImagePatternSection' }),
    defineArrayMember({ type: 'ctaTelSection' }),
    defineArrayMember({ type: 'stepsSection' }),
    defineArrayMember({ type: 'faqSection' }),
    defineArrayMember({ type: 'socialProofSection' }),
    defineArrayMember({ type: 'aboutSection' }),
    defineArrayMember({ type: 'helpCardsSection' }),
    defineArrayMember({ type: 'textWithVideoSection' }),
    defineArrayMember({ type: 'missionSection' }),
    defineArrayMember({ type: 'teamSection' }),
    defineArrayMember({ type: 'blogSection' }),
  ],
})
