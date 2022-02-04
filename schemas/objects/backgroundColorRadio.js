export default {
    type: 'object',
    name: 'backgroundColorRadio',
    title: 'Background Color',
    fields: [
      {
        title: "Background Color",
        name: 'backgroundColor',
        type: 'string',
        
        options: {
            layout: 'radio',
            list: [
                'grey', 'white'
            ]
        }
      },
      
    ]
  }
  