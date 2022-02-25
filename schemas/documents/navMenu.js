import {RiCompass3Line} from "react-icons/ri";


export default {
    type: 'document',
    name: 'navigationMenu',
    description: 'You can change which pages are linked in the top navigation (Desktop Navigation) or in the Footer. These can appear as links or buttons depending on how you configure the items.',
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
  