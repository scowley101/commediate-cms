export default {
    name: 'mainImage',
    type: 'image',
    title: 'Image',
    options: {
      hotspot: true
    },
    fieldsets: [
      {
        name: 'caption',
        title: 'Caption',
        options: {
          collapsible: true,
          collapsed: true
        }
      }
    ],
    fields: [
      {
        name: 'caption',
        type: 'string',
        title: 'Caption',
        fieldsets: 'caption'
      },
      {
        name: 'alt',
        type: 'string',
        title: 'Alternative text',
        description: 'Important for SEO and accessibility.',
        validation: Rule => Rule.error('You have to fill out the alternative text.').required(),
        fieldsets: 'caption'
      }
    ],
     preview: {
       select: {
        imageUrl: 'asset.url',
         title: 'caption'
    }
   }
  }
  