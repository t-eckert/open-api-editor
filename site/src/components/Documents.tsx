import DocumentPreview from "./DocumentPreview";
import DocumentCreate from "./DocumentCreate";

type Props = {
  documents: { title: string; version: string }[];
};

const Documents = (props: Props) => {
  const documentPreviews = props.documents.map((document) => (
    <DocumentPreview document={document} key={document.title} />
  ));

  return (
    <div className="pt-8 mx-auto container">
      <h1 className="mb-4 font-medium text-xl">Documents</h1>
      <div className="flex flex-row flex-wrap gap-4">
        {documentPreviews}
        <DocumentCreate />
      </div>
    </div>
  );
};

export default Documents;
