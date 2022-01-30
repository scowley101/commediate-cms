export default {
    title: 'Simple Block Content',
    name: 'simpleBlockContent',
    type: 'array',
    of: [
      {
        title: 'Block',
        type: 'block',
        styles: [
            {title: 'H1', value: 'h1'},
           {title: 'H2', value: 'h2'},
           {title: 'H3', value: 'h3'},
           {title: 'H4', value: 'h4'},
           {title: 'H5', value: 'h5'},
           {title: 'H6', value: 'h6'},
           {title: 'H7', value: 'h7'},
           {title: 'Text Base', value: 'text-base'},
           {title: 'Text Large', value: 'text-lg'},
           {title: 'Text XL', value: 'text-xl'},
           {title: 'Text 2XL', value: 'text-2xl'},
           {title: 'Orange Underline', value: 'orangeUnderline'},

        ],
        marks: {
          decorators: [
            {title: 'Strong', value: 'strong'},
            {title: 'Emphasis', value: 'em'},
            {title: 'Italic', value: 'italic'},
            {title: 'Code', value: 'code'},
            {title: 'Underline', value: 'underline'},
            {title: 'Orange Underline', value: 'orangeUnderline'},
          ],
          annotations: [
            {
              title: 'URL',
              type: 'link'
            }
          ]
        }
      }
    ]
  }
  