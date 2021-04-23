import Button from "../../buttons/Button"
import Server from "./Server"

type Props = {
  className?: string
}

const Servers: React.FC<Props> = (props: Props) => {
  return (
    <section className={"" + props.className}>
      <header className="mb-2 flex flex-row justify-between">
        <h2 className="text-xl font-medium text-gray-900" id="servers">
          Servers
        </h2>
        <Button role="secondary" action={() => {}}>
          Add Server
        </Button>
      </header>
      <div className="grid auto-cols-min">
        <Server key={1} />
      </div>
    </section>
  )
}

export default Servers
