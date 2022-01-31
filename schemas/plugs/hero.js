
import { MdVerticalAlignTop} from "react-icons/md";

export default {
  type: 'object',
  name: 'hero',
  title: 'Hero',
  icon: MdVerticalAlignTop,
  fields: [
    {
      name: 'label',
      type: 'string'
    },
    {
      name: 'heading',
      type: 'simpleBlockContent',
      title: 'Heading'
    },
    {
      name: 'tagline',
      type: 'simpleBlockContent'
    },
    {
      name: 'illustration',
      type: 'illustration'
    },
    {
      name: 'cta',
      type: 'cta'
    }
  ],
  preview: {
    select: {
      title: 'heading',
      subtitle: 'label',
      disabled: 'disabled'
    },
    prepare({ title }) {
      return {
        title: "Hero",
      }
    }
  }
}
