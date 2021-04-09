import CloseIcon from "../../icons/CloseIcon"
import TextInput from "../../inputs/TextInput"
const License = (props: { closeAction: any }) => {
  return (
    <div className="bg-white rounded-xl shadow flex flex-col gap-3">
      <header className="px-3 pt-3 flex flex-row justify-between items-center">
        <h2 className="font-medium">License</h2>
        <CloseIcon
          classes="h-4 w-4 text-gray-900 hover:text-yellow-500 cursor-pointer"
          onClick={props.closeAction}
        />
      </header>
      <div className="flex flex-col px-3 pb-3 gap-3">
        <TextInput
          label="Name"
          placeholder="MIT"
          id="info-license-name"
          value=""
          isOptional={true}
        />
        <TextInput
          label="URL"
          placeholder="https://mitlicense.com"
          id="info-license-url"
          value=""
          isOptional={true}
        />
      </div>
    </div>
  )
}

export default License
