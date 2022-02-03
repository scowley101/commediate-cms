import {FiColumns} from "react-icons/fi";


export default {
    type: 'object',
    name: 'comparisonLists',
    title: 'Comparison Lists',
    icon: FiColumns,
    description: '',
    fields: [
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
            title: 'Pro Icon',
            name: 'proIcon',
            type: 'reference',
            to: [
              {type: 'icons'},
            ]
          },
          {
            title: 'Pros title',
            name: 'prosTitle',
            type: 'simpleBlockContent'
          },
          {
            title: 'Pros list',
            name: 'prosList',
            type: 'simpleBlockContent'
          },
          {
            title: 'Con Icon',
            name: 'conIcon',
            type: 'reference',
            to: [
              {type: 'icons'},
            ]
          },
          {
            title: 'Cons title',
            name: 'consTitle',
            type: 'simpleBlockContent'
          },
          {
            title: 'Cons list',
            name: 'consList',
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
          title: 'Two Column List',
          subtitle: title
        }
      }
    }
  }