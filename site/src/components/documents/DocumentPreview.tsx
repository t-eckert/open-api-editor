import { Link } from "react-router-dom";

type Props = {
  document: {
    title: string;
    version: string;
  };
};

const classes = [
  "z-10 p-3 flex bg-white shadow justify-between transition", // Both widths
  "w-full h-15 flex-row items-center border-b border-yellow first:rounded-t-md last:border-none", // Small width
  "md:w-44 md:h-60 md:flex-col md:items-start md:border-none md:shadow md:rounded-md md:hover:shadow-xl", // Large width
].join(" ");

const DocumentPreview = (props: Props) => {
  return (
    <div className={classes}>
      <div>
        <h2 className="font-medium">{props.document.title}</h2>
        <h3 className="font-medium text-gray-600">{props.document.version}</h3>
      </div>
      <Link
        className="font-medium text-yellow-500 hover:text-yellow-600 transition"
        to="/editor/2"
      >
        Edit
      </Link>
    </div>
  );
};

export default DocumentPreview;