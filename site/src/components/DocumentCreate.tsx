import Button from "./Button";

const DocumentPreview = () => {
  return (
    <div className="p-3 w-44 h-60 flex flex-col items-center justify-center rounded-md bg-yellow-100 border-1 border-white border-dashed">
      <Button role="secondary">+ New</Button>
    </div>
  );
};

export default DocumentPreview;
