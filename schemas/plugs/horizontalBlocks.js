import {BiGridHorizontal} from "react-icons/Bi";


export default {
    title: 'Horizontal Blocks',
    name: 'horizontalBlocks',
    type: 'object',
    icon: BiGridHorizontal,

    fields: [
        
      {
        title: 'List of blocks',
        name: 'blocks',
        type: 'array',
        of: [
          {
            type: 'blocks'
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
          title: 'Horizontal Blocks',
          subtitle: title
        }
      }
    }
  }