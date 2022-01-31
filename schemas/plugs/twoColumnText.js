import {FiColumns} from "react-icons/fi";


export default {
    type: 'object',
    name: 'twoColumnText',
    title: 'Two Column Text',
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
          title: 'Two Column Text',
          subtitle: title
        }
      }
    }
  }