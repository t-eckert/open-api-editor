import TextInputWithPrefix from "../../inputs/TextInputWithPrefix"

const General = () => {
  return (
    <div className="p-2 bg-white rounded-t-xl">
      <div className="w-96">
        <TextInputWithPrefix
          prefix="/"
          placeholder="path"
          id={"path"}
          value=""
          isOptional={false}
        />
      </div>
    </div>
  )
}

export default General
