import {MdTimeline} from "react-icons/md";


export default {
    type: 'object',
    name: 'cvTimeline',
    title: 'CV Timeline',
    icon: MdTimeline,
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
        title: 'CV Items',
        name: 'cvItems',
        type: 'array',
        of: [
          {
            type: 'cvItem'
          }
        ]
      },
          
    ],
    preview: {
      select: {
        title: 'title'
      },
      prepare({title}) {
        return {
          title: 'CV Timeline',
          subtitle: title
        }
      }
    }
  }