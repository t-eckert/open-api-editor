import Button from "../../buttons/Button"

type Props = {
  className?: string
}

const Servers = (props: Props) => {
  return (
    <section className={"" + props.className}>
      <header className="flex flex-row justify-between">
        <h2 className="text-xl font-medium text-gray-900" id="servers">
          Servers
        </h2>
        <Button role="secondary" action={() => {}}>
          Add Server
        </Button>
      </header>
      <div className="grid"></div>
    </section>
  )
}

export default Servers
