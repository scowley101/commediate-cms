import {GiTalk} from "react-icons/gi";


export default {
    title: 'Testimonials',
    name: 'testimonials',
    type: 'object',
    icon: GiTalk,

    fields: [
      {
        name: "backgroundColorRadio",
        type: 'backgroundColorRadio'
      },
      {
        name: 'heading',
        type: 'simpleBlockContent'
      },
      {
        name: 'subtitle',
        type: 'simpleBlockContent'
      },
    
      {
        title: 'List of testimonials',
        name: 'clientTestimonials',
        type: 'array',
        of: [
          {
            type: 'clientTestimonial'
          }
        ]
      }
    ],
    preview: {
      select: {
        title: 'title'
      },
      prepare({title}) {
        return {
          title: 'Testimonials',
          subtitle: title
        }
      }
    }
  }