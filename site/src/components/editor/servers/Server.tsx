import CloseIcon from "../../icons/CloseIcon"
import TextInput from "../../inputs/TextInput"
import TextArea from "../../inputs/TextArea"

type Props = {
  key: number
}

const Server = (props: Props) => {
  return (
    <section className="bg-gray-50 w-96 rounded-lg shadow flex flex-col">
      <header className="px-4 py-1 flex flex-row items-center justify-between">
        <h2 className="font-medium">Server</h2>
        <CloseIcon className="h-4 w-4" />
      </header>
      <main className="bg-white p-4 flex flex-col gap-2 rounded-lg">
        <TextInput
          label="URL"
          placeholder="https://server.com"
          id={props.key + "-server-url"}
          value=""
          isOptional={false}
        />
        <TextArea
          label="Description"
          placeholder="A description of your server"
          id={props.key + "-server-description"}
          value=""
          isOptional={true}
        />
      </main>
    </section>
  )
}

export default Server
