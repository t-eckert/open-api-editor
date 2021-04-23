import TextInputWithPrefix from "../../inputs/TextInputWithPrefix"
import TextArea from "../../inputs/TextArea"

const General = () => {
  return (
    <>
      <TextInputWithPrefix
        label="Path"
        prefix="/"
        placeholder="path"
        id={"path"}
        value=""
        isOptional={false}
      />
      <TextArea
        label="Summary"
        placeholder="A short summary of the path"
        id={"summary"}
        value=""
        isOptional={true}
      />
      <TextArea
        label="Description"
        placeholder="A short description of your path"
        id={"description"}
        value=""
        isOptional={true}
      />
    </>
  )
}

export default General
