import {FiColumns} from "react-icons/fi";


export default {
    name: 'codeInject',
    title: 'Inject Code',
    type: 'object',
    icon: FiColumns,
    description: '',
    fields: [
        {
            name: 'code',
            title: 'Code',
            type: 'text',
          },
        
    ],
    preview: {
      select: {
        title: 'title'
      },
      prepare({title}) {
        return {
          title: 'Code Inject',
          subtitle: title
        }
      }
    }
  }