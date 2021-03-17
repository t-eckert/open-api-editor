import Button from "./inputs/Button";

const DocumentPreview = () => {
  return (
    <div className="p-3 w-full md:w-44 h-15 md:h-60 flex flex-col items-end md:items-center justify-center rounded-b-md md:rounded-md bg-yellow-100">
      <Button role="secondary">+ New</Button>
    </div>
  );
};

export default DocumentPreview;
