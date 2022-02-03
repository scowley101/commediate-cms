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
          title: 'Tagline',
          name: 'tagline',
          type: 'string'
          },
        {
          title: 'Capabilities title',
          name: 'capabilitiesTitle',
          type: 'string'
          },
          {
            title: 'Capabilities Text',
            name: 'capabilitiesText',
            type: 'simpleBlockContent'
          },
          {
            title: 'Application title',
            name: 'applicationTitle',
            type: 'string'
            },
            {
              title: 'Application Text',
              name: 'applicationText',
              type: 'simpleBlockContent'
            },
      
    ]
  }
  