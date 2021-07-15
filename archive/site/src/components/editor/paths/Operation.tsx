import TextInput from "../../inputs/TextInput"
import TextArea from "../../inputs/TextArea"

/* TODO: add a tags field */
const Operation = (props: { title: string }) => {
  return (
    <div className="flex-1">
      <h2 className="mb-3 font-medium text-lg text-gray-800">{props.title}</h2>
      <div className="w-full grid grid-cols-3 gap-4">
        <div className="w-full flex flex-col gap-3">
          <TextInput
            className="w-full"
            label="Tags"
            placeholder="comma, separated, tags"
            id={"tags"}
            value=""
            isOptional={false}
          />
          <TextArea
            className="w-full"
            label="Summary"
            placeholder="A short summary of what the operation does."
            id={"summary"}
            value=""
            isOptional={false}
          />
          <TextArea
            className="w-full"
            label="Description"
            placeholder="A verbose explanation of the operation behavior."
            id={"summary"}
            value=""
            isOptional={false}
          />
        </div>
        <div className="p-2 rounded-xl bg-gray-50 flex flex-col gap-3">
          <h3 className="font-medium text-md text-gray-800">
            External Documentation
          </h3>
          <TextInput
            className="w-full"
            label="Description"
            placeholder="Find more info here"
            id={"documentation-description"}
            value=""
            isOptional={false}
          />
          <TextInput
            className="w-full"
            label="URL"
            placeholder="https://documentation.com"
            id={"documentation-url"}
            value=""
            isOptional={false}
          />
        </div>
        <TextInput
          className="w-full"
          label="Operation ID"
          placeholder="operationId"
          id={"operation-id"}
          value=""
          isOptional={false}
        />
      </div>
    </div>
  )
}

export default Operation
