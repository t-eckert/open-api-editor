import { observer } from "mobx-react-lite"

import { useDocumentStore, useInput } from "../../../hooks"
import TextArea from "../../inputs/TextArea"
import TextInput from "../../inputs/TextInput"

const ApiInformation = observer(() => {
  const documentStore = useDocumentStore()

  const { value: title, bind: bindTitle } = useInput(documentStore.getTitle())
  const { value: version, bind: bindVersion } = useInput(
    documentStore.getVersion()
  )
  const { value: termsOfService, bind: bindTermsOfService } = useInput(
    documentStore.getTermsOfService()
  )
  const { value: description, bind: bindDescription } = useInput(
    documentStore.getDescription()
  )

  documentStore.setTitle(title)
  documentStore.setVersion(version)
  documentStore.setTermsOfService(termsOfService)
  documentStore.setDescription(description)

  return (
    <div className="p-3 grid grid-cols-1 sm:grid-cols-2 gap-4 bg-white rounded-lg shadow">
      <div className="flex flex-col gap-4">
        <TextInput
          label="Title"
          placeholder="The title of the API"
          id="info-title"
          isOptional={false}
          {...bindTitle}
        />
        <TextInput
          label="Version"
          placeholder="1.0.0"
          id="info-version"
          isOptional={false}
          {...bindVersion}
        />
        <TextInput
          label="Terms of service"
          placeholder="https://tos.org"
          id="info-terms-of-service"
          isOptional={true}
          {...bindTermsOfService}
        />
      </div>
      <div>
        <TextArea
          label="Description"
          placeholder="A short description of your API"
          id="info-description"
          isOptional={false}
          {...bindDescription}
        />
      </div>
    </div>
  )
})

export default ApiInformation
