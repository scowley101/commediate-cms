export default {
    type: 'object',
    name: 'roleComparison',
    title: 'Role Comparison',
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
        title: 'Job Roles',
        name: 'jobRoles',
        type: 'array',
        of: [
          {
            type: 'jobRole'
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
          title: 'Role Comparison',
          subtitle: title
        }
      }
    }
  }