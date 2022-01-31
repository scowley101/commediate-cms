export default {
    type: 'object',
    name: 'cvItem',
    title: 'CV Item',
    fields: [
      // TODO: Add icons
      {
        title: 'Company',
        name: 'company',
        type: 'string'
        
        },
        {
          title: 'Company subtitle',
          name: 'companySubtitle',
          type: 'string'
          
          },
        {
            title: 'Years',
            name: 'years',
            type: 'string'
            },

      {
        title: 'Job Role List',
        name: 'jobRoleList',
        type: 'array',
        of: [
            {type: 'listItem'}
        ]
      },
      {
        title: 'Role Summary List',
        name: 'roleSummaryList',
        type: 'array',
        of: [
            {type: 'listItem'}
        ]
      }
    ]
  }
  