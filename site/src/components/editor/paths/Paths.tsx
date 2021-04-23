import Button from "../../buttons/Button"
import Path from "./Path"

type Props = {
  className?: string
}

const Paths = (props: Props) => {
  return (
    <section className={"" + props.className}>
      <header className="mb-2 flex flex-row justify-between">
        <h2 className="text-xl font-medium text-gray-900" id="paths">
          Paths
        </h2>
        <Button role="secondary" action={() => {}}>
          Add Path
        </Button>
      </header>
      <div className="grid grid-cols-2 gap-4">
        <Path />
      </div>
    </section>
  )
}

export default Paths
