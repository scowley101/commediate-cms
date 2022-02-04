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