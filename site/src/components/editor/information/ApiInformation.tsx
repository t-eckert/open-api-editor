import TextArea from "../../inputs/TextArea"
import TextInput from "../../inputs/TextInput"

const ApiInformation = () => {
  return (
    <div className="p-3 grid grid-cols-1 sm:grid-cols-2 gap-4 bg-white rounded-lg shadow">
      <div className="flex flex-col gap-4">
        <TextInput
          label="Title"
          placeholder="The title of the API"
          id="info-title"
          value=""
          isOptional={false}
        />
        <TextInput
          label="Version"
          placeholder="1.0.0"
          id="info-version"
          value=""
          isOptional={false}
        />
        <TextInput
          label="Terms of service"
          placeholder="https://tos.org"
          id="info-terms-of-service"
          value=""
          isOptional={true}
        />
      </div>
      <div>
        <TextArea
          label="Description"
          placeholder="A short description of your API"
          id="info-description"
          value=""
          isOptional={false}
        />
      </div>
    </div>
  )
}

export default ApiInformation
