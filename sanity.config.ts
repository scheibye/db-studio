import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schema } from './schemaTypes'
import { structure } from './structure'

export default defineConfig({
  name: 'default',
  title: 'Dansk Boliglån',

  projectId: 'xtu7sfpe',
  dataset: 'production',

  schema: {
    types: schema.types,
  },

  // prettier-ignore
  plugins: [
    structureTool({ structure }),
    visionTool(),
  ],
})
