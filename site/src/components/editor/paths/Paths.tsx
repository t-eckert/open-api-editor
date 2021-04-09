import Button from "../../buttons/Button"

type Props = {
  className?: string
}

const Paths = (props: Props) => {
  return (
    <section className={"" + props.className}>
      <header className="flex flex-row justify-between">
        <h2 className="text-xl font-medium text-gray-900" id="paths">
          Paths
        </h2>
        <Button role="secondary" action={() => {}}>
          Add Path
        </Button>
      </header>
    </section>
  )
}

export default Paths
