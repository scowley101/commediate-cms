import {FiColumns} from "react-icons/fi";


export default {
    type: 'object',
    name: 'flowLists',
    title: 'Flow Lists',
    icon: FiColumns,
    description: '',
    fields: [
        {
            name: "backgroundColorRadio",
            type: 'backgroundColorRadio'
          },
        {
            title: 'Heading',
            name: 'heading',
            type: 'simpleBlockContent',
            title: 'Heading'
          },
          {
            title: 'Tagline',
            name: 'tagline',
            type: 'simpleBlockContent'
          },
                    {
            title: 'Pros title',
            name: 'prosTitle',
            type: 'simpleBlockContent'
          },
          
          
          {
            title: 'Cons title',
            name: 'consTitle',
            type: 'simpleBlockContent'
          },
          {
            title: 'Pros/Cons List',
            name: 'prosConsList',
            type: 'array',
            of: [
               { type: 'comparisonListItem',}
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
          title: 'Flow Lists',
          subtitle: title
        }
      }
    }
  }