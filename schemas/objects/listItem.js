export default {
    type: 'object',
    name: 'listItem',
    title: 'List Item',
    fields: [
      // TODO: Add icons
      {
        title: 'List Icon',
        name: 'listIcon',
        type: 'reference',
        to: [
          {type: 'icons'},
        ]
      },
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
    ],
    preview: {
      select: {
        heading: 'listHeading',
        body: 'text'
      },
      prepare({heading, body}) {
        const headingContent = heading
        const bodyContent = body[0].children[0].text


        return {
          
          title: `${headingContent ? headingContent : bodyContent}`,
        
        
        }
      }
    }
  }
  