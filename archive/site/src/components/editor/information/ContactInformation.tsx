import CloseIcon from "../../icons/CloseIcon"
import TextInput from "../../inputs/TextInput"

const ContactInfo = (props: { closeAction: any }) => {
  return (
    <div className="bg-white rounded-xl shadow flex flex-col gap-3">
      <header className="px-3 pt-3 flex flex-row justify-between items-center">
        <h2 className="font-medium">Contact info</h2>
        <CloseIcon
          className="h-4 w-4 text-gray-900 hover:text-yellow-500 cursor-pointer"
          onClick={props.closeAction}
        />
      </header>
      <div className="flex flex-col px-3 pb-3 gap-3">
        <TextInput
          label="Name"
          placeholder="Bill Posters"
          id="info-contact-person"
          value=""
          isOptional={true}
        />
        <TextInput
          label="Email"
          placeholder="bill.posters@email.com"
          id="info-contact-email"
          value=""
          isOptional={true}
        />
        <TextInput
          label="Website"
          placeholder="https://billposters.com"
          id="info-contact-website"
          value=""
          isOptional={true}
        />
      </div>
    </div>
  )
}

export default ContactInfo
