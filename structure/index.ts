import type { StructureResolver } from 'sanity/structure'

export const structure: StructureResolver = (S) =>
  S.list()
    .title('Website')
    .items([
      // ---------------------------
      // Pages
      // ---------------------------
      S.listItem()
        .title('Pages')
        .schemaType('page')
        .child(S.documentTypeList('page').title('Pages')),

      S.divider(),

      // ---------------------------
      // Blog
      // ---------------------------
      S.listItem()
        .title('Blog')
        .child(
          S.list()
            .title('Blog')
            .items([
              // Blog index (singleton)
              S.listItem()
                .title('Blog Index Page')
                .schemaType('blogIndex')
                .child(S.document().schemaType('blogIndex').documentId('blogIndex')),

              S.divider(),

              // Blog posts
              S.listItem()
                .title('Posts')
                .schemaType('post')
                .child(S.documentTypeList('post').title('Posts')),

              // Categories
              S.listItem()
                .title('Categories')
                .schemaType('category')
                .child(S.documentTypeList('category').title('Categories')),

              // Authors
              S.listItem()
                .title('Authors')
                .schemaType('author')
                .child(S.documentTypeList('author').title('Authors')),
            ])
        ),

      S.divider(),

      // ---------------------------
      // Site settings (singleton)
      // ---------------------------
      S.listItem()
        .title('Site Settings')
        .schemaType('siteSettings')
        .child(S.document().schemaType('siteSettings').documentId('siteSettings')),
    ])
