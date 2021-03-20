import { observer } from "mobx-react-lite";

import TextInput from "../../inputs/TextInput";
import TextArea from "../../inputs/TextArea";

const Info = observer(() => {
  return (
    <div
      className="p-4 flex flex-col gap-4 rounded-xl bg-white shadow"
      id="info"
    >
      <div>
        <h2 className="mb-1 text-4xl font-semibold text-gray-800">Info</h2>
        <p className="text-sm font-medium text-gray-600">
          Metadata for your API document.
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <TextInput
          value=""
          label="Title"
          placeholder="The title of the API"
          id="info-title"
          isOptional={false}
        />
        <TextInput
          value=""
          label="Version"
          placeholder="1.0.0"
          id="info-version"
          isOptional={false}
        />
        <TextArea
          value=""
          label="Description"
          placeholder="A short description of your API"
          id="info-description"
          isOptional={true}
        />
      </div>
    </div>
  );
});

export default Info;
