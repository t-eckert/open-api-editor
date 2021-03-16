import Button from "./inputs/Button";

type Props = {
  document: {
    title: string;
    version: string;
  };
};

const DocumentPreview = (props: Props) => {
  return (
    <div className="p-3 w-44 h-60 flex flex-col items-start justify-between shadow bg-white rounded-md hover:shadow-xl transition">
      <div>
        <h2 className="font-medium">{props.document.title}</h2>
        <h3 className="font-medium text-gray-600">{props.document.version}</h3>
      </div>
      <Button role="tertiary">Edit</Button>
    </div>
  );
};

export default DocumentPreview;
