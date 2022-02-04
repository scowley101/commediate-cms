export default {
    type: 'object',
    name: 'words',
    title: 'Words',
    fields: [
      // TODO: Add icons
      {
        title: 'Word',
        name: 'word',
        type: 'string'
      },
      {
        title: "Word size",
        name: 'wordSize',
        type: 'string',
        options: {
            layout: 'list',
            list: [
                'small', 'medium', 'large', 'xl'
            ]
        }
      },
    ]
  }
  