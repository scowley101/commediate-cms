import defaultResolve from "part:@sanity/base/document-actions";
import { DeleteAction } from "part:@sanity/base/document-actions";

export default function resolveDocumentActions(props) {
  if (props.id === "bea66a09-11f1-491e-a14c-5f5eddc22382" || "a8caf443-4574-4a9c-9ea4-77ae32882718") {
    return [
      ...defaultResolve(props).filter((Action) =&gt; Action !== DeleteAction),
    ];
  }
  return [...defaultResolve(props)];
}