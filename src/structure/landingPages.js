import PreviewIFrame from '../../src/components/previewIFrame'
import { FaHammer } from "react-icons/fa"
import { MdMenu } from "react-icons/md"

export default (S) => S.listItem()
  .title('Page Builder')
  .icon(FaHammer)
  .child(
    S.list()
      .title('Landing Pages')
      .items([
        S.listItem()
          .title('Navigation Menus')
          .icon(MdMenu)
          .schemaType('navigationMenu')
          .child(S.documentTypeList('navigationMenu').title('Navigation Menus')),
        S.listItem()
          .title('Routes')
          .schemaType('route')
          .child(
            S.documentTypeList('route')
              .title('Routes')
              .child((documentId) =>
                S.document()
                  .documentId(documentId)
                  .schemaType('route')
                  .views([S.view.form(), PreviewIFrame()])
              )
          ),
        S.listItem()
          .title('Pages')
          .schemaType('page')
          .child(
            S.documentList('page')
              .title('Pages')
              .menuItems(S.documentTypeList('page').getMenuItems())
              .filter('_type == "page" && _id != "bea66a09-11f1-491e-a14c-5f5eddc22382"')
          ),
          S.listItem()
          .title('Icons')
          .schemaType('icons')
          .child(
            S.documentTypeList('icons').title('Icons')
          ),
      ])
  )
