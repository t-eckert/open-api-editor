import Button from "../../buttons/Button"
import SecurityCard from "./SecurityCard"

type Props = {
  className?: string
}

const Security = (props: Props) => {
  return (
    <section className={"" + props.className}>
      <header className="mb-2 flex flex-row justify-between">
        <h2 className="text-xl font-medium text-gray-900" id="security">
          Security
        </h2>
        <Button role="secondary" action={() => {}}>
          Add Security
        </Button>
      </header>
      <main className="grid grid-cols-4">
        <SecurityCard />
      </main>
    </section>
  )
}

export default Security
