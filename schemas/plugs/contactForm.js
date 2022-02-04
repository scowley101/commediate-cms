import {AiOutlineForm} from "react-icons/ai";


export default {
    type: 'object',
    name: 'contactForm',
    title: 'Contact form',
    icon: AiOutlineForm,
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
            type: 'simpleBlockContent',
            title: 'Tagline'
          },
          {
            title: "Show contact Form",
            name: 'isForm',
            type: 'boolean',
            initialValue: true,
            
          },
    ],
    preview: {
      select: {
        title: 'title'
      },
      prepare({title}) {
        return {
          title: 'Contact form',
          subtitle: title
        }
      }
    }
  }