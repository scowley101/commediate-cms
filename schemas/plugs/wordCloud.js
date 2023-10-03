import {AiOutlineCloud} from "react-icons/ai";


export default {
    type: 'object',
    name: 'wordCloud',
    title: 'Word Cloud',
    icon: AiOutlineCloud,
    description: '',
    fields: [
      {
        name: "backgroundColorRadio",
        type: 'backgroundColorRadio'
      },
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
          title: 'Word Cloud',
          subtitle: title
        }
      }
    }
  }