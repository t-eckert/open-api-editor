import Button from "../../buttons/Button"

type Props = {
  className?: string
}

const Security = (props: Props) => {
  return (
    <section className={"" + props.className}>
      <header className="flex flex-row justify-between">
        <h2 className="text-xl font-medium text-gray-900" id="security">
          Security
        </h2>
        <Button role="secondary" action={() => {}}>
          Add Security
        </Button>
      </header>
    </section>
  )
}

export default Security
