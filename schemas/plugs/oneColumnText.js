import {FiSquare} from "react-icons/fi";


export default {
    type: 'object',
    name: 'oneColumnText',
    title: 'One Column Text',
    icon: FiSquare,
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
          title: 'One Column Text',
          subtitle: title
        }
      }
    }
  }