import toPlainText from "../components/toPlainText"

export default {
    type: 'object',
    name: 'blocks',
    title: 'Blocks',
    fields: [
      {
        title: "Heading",
        name: 'heading',
        type: 'simpleBlockContent'
      },
      {
        title: 'Body',
        name: 'body',
        type: 'simpleBlockContent'
      },
    ],
    preview: {
      select: {
        heading: 'heading',
        body: 'body'
      },
      prepare({heading, body}) {

        return {
          
          title: `${heading[0].children[0].text}`,
          subtitle: `${body[0].children[0].text}`
        
        }
      }
    }
  }
  