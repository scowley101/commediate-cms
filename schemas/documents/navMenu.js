import {RiCompass3Line} from "react-icons/ri";


export default {
    type: 'document',
    name: 'navigationMenu',
    icon: RiCompass3Line,
    fields: [
      {
        type: 'string',
        name: 'title'
      },
      {
        type: 'array',
        name: 'items',
        of: [{ type: 'cta' }]
      }
    ]
  }
  