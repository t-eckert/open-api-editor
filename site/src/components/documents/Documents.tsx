import DocumentPreview from "./DocumentPreview"
import DocumentCreate from "./DocumentCreate"

type Props = {
  documents: { title: string; version: string }[]
}

const Documents = (props: Props) => {
  const documentPreviews = props.documents.map((document) => (
    <DocumentPreview document={document} key={document.title} />
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
