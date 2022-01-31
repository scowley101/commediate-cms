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
            type: "iconPicker"
        }
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