import CloseIcon from "../../icons/CloseIcon"
import TextArea from "../../inputs/TextArea"
import TextInput from "../../inputs/TextInput"

const SecurityCard = () => {
  return (
    <section className="bg-gray-50 rounded-xl shadow flex flex-col">
      <header className="px-4 py-1 flex items-center justify-between">
        <h2 className="font-medium text-gray-900">Security</h2>
        <CloseIcon classes="h-4 w-4" />
      </header>
      <main className="p-3 flex flex-col gap-3 bg-white rounded-xl">
        <TextArea
          label="Description"
          placeholder="Basic"
          id={"scheme"}
          value=""
          isOptional={true}
        />
        <TextInput
          label="Scheme"
          placeholder="Basic"
          id={"scheme"}
          value=""
          isOptional={true}
        />
      </main>
    </section>
  )
}

export default SecurityCard
