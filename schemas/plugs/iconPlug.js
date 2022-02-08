import preview from "part:sanity-plugin-icon-picker/preview";



export default {
    type: 'object',
    name: 'iconPlug',
    title: 'Icon',
    description: '',
    fields: [
        {
            title: "Icon",
            name: "icon",
            type: "icon"
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
          provider: "icon.provider",
          name: "icon.name",
        },
        prepare(icon) {
          return {
            title: icon.provider,
            subtitle: icon.name,
            media: preview(icon),
          };
        },
      }

  }