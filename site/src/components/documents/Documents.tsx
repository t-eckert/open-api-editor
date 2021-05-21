import DocumentPreview from "./DocumentPreview"
import DocumentCreate from "./DocumentCreate"
import { OpenApiDocument } from "../../interfaces"

type Props = {
  documents: OpenApiDocument[]
}

const Documents = (props: Props) => {
  const documents = props.documents

  const documentPreviews =
    documents &&
    documents.map((document) => (
      <DocumentPreview document={document} key={document._id.$oid} />
    ))

  return (
    <div className="pt-8 px-2 mx-auto container">
      <div className="w-full flex flex-row justify-between items-baseline">
        <h1 className="mb-4 font-medium text-xl">Documents</h1>
      </div>
      <div className="mb-4 flex flex-col md:flex-row flex-wrap md:gap-4">
        {documentPreviews}
        <DocumentCreate />
      </div>
    </div>
  )
}

export default Documents
