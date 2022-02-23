import {FiColumns} from "react-icons/fi";


export default {
    type: 'object',
    name: 'codeInject',
    title: 'Inject Code',
    icon: FiColumns,
    description: '',
    fields: [
        {
            name: 'code',
            title: 'Code',
            type: 'code',
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