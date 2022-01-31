import {FiColumns} from "react-icons/fi";


export default {
    type: 'object',
    name: 'twoColumnList',
    title: 'Two Column List',
    icon: FiColumns,
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
          title: 'Two Column List',
          subtitle: title
        }
      }
    }
  }