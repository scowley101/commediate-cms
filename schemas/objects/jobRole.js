export default {
    type: 'object',
    name: 'jobRole',
    title: 'Job Role',
    fields: [
      // TODO: Add icons
      {
        title: 'Job Title',
        name: 'jobTitle',
        type: 'string'
        },

      {
        title: 'Text',
        name: 'text',
        type: 'array',
        of: [
            {type: 'listItem'}
        ]
      }
    ]
  }
  