export default {
    type: 'object',
    name: 'oneColumnList',
    title: 'One Column List',
    description: '',
    fields: [
        {
            name: 'heading',
            type: 'simpleBlockContent',
            title: 'Heading'
          },
          {
            name: 'tagline',
            type: 'simpleBlockContent'
          },
          {
        title: 'List Items',
        name: 'listItems',
        type: 'array',
        of: [
          {
            type: 'listItem'
          }
        ]
      },
          {
            name: 'cta',
            type: 'cta'
          },
    ],
    preview: {
      select: {
        title: 'title'
      },
      prepare({title}) {
        return {
          title: 'One Column List',
          subtitle: title
        }
      }
    }
  }