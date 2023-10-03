import { MdMenu } from "react-icons/md"
import { GoBrowser as PageIcon, GoHome, GoSettings } from "react-icons/go"
import blog from './src/structure/blog'
import landingPages from './src/structure/landingPages'
import PreviewIFrame from './src/components/previewIFrame'

const hiddenDocTypes = (listItem) =>
  !['route', 'navigationMenu', 'post', 'page', 'siteSettings', 'author', 'category', 'icons'].includes(
    listItem.getId()
  )

export default (S) =>
  S.list()
    .title('Content')
    .items([
      S.documentListItem()
      .id('a8caf443-4574-4a9c-9ea4-77ae32882718')
        .schemaType('siteSettings')
        .title('Site settings')
        .icon(GoSettings)
        .child(
          S.document()
            .schemaType('siteSettings')
            .documentId('a8caf443-4574-4a9c-9ea4-77ae32882718')
            .views([S.view.form(), PreviewIFrame()])
        ),
      S.documentListItem()
      .id('bea66a09-11f1-491e-a14c-5f5eddc22382')
        .title('Frontpage')
        .schemaType('page')
        .icon(GoHome)
        .child(
          S.document()
            .schemaType('page')
            .documentId('bea66a09-11f1-491e-a14c-5f5eddc22382')
            .views([S.view.form(), PreviewIFrame()])
        ),
      landingPages,
      blog,
      // This returns an array of all the document types
      // defined in schema.js. We filter out those that we have
      // defined the structure above
      ...S.documentTypeListItems().filter(hiddenDocTypes),
    ])
