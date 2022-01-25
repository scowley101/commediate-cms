export default {
    type: 'object',
    name: 'listItem',
    title: 'List Item',
    fields: [
      // TODO: Add icons
      {
        title: 'List Heading',
        name: 'listHeading',
        type: 'string'
      },
        {
        title: 'Text',
        name: 'text',
        type: 'simpleBlockContent'
      },
    ]
  }
  