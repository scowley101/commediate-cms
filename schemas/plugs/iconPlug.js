import preview from "part:sanity-plugin-icon-picker/preview";
import { BsEmojiSmile } from "react-icons/bs"



export default {
    type: 'object',
    name: 'iconPlug',
    title: 'Icon break',
    icon: BsEmojiSmile,
    description: '',
    fields: [
        {
            title: "Icon",
            name: "iconRef",
            type: "reference",
            to: [
              {type: 'icons'}
            ],
        },
        {
          title: "Icon Position",
          name: "position",
          type: "string",
          options: {
            list: ['left', 'right'],
            layout: 'radio',
          }
      },
        {
          title: "Background Color of above module",
          name: "backgroundColorAbove",
          type: 'backgroundColorRadio'
        },
        {
          title: "Background Color of below module",
          name: "backgroundColorBelow",
          type: 'backgroundColorRadio'
        },
    ],
    preview: {
      select: {
        title: 'title'
      },
      prepare({title}) {
        return {
          title: 'Icon'
        }
      }
    }
}