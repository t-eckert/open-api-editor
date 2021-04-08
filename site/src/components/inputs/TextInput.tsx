type Props = {
  value: string
  onChange?: any
  label: string
  placeholder: string
  id: string
  isOptional: boolean
  className?: string
  type?: string
}

const TextInput = (props: Props) => {
  const type = props.type || "text"

  return (
    <div className={props.className}>
      <div className="mb-1 w-full flex justify-between">
        <label
          className="block font-medium leading-5 text-gray-700"
          htmlFor={props.id}
        >
          {props.label}
        </label>
        <span className="block text-sm font-medium leading-5 text-gray-600">
          {props.isOptional ? "Optional" : ""}
        </span>
      </div>
      <div className="relative rounded-xl shadow-sm">
        <input
          className="block appearance-none w-full bg-white transition border border-gray-400 hover:border-gray-500 px-3 py-2 rounded-xl leading-tight focus focus:border-yellow-400"
          type={type}
          name={props.id}
          id={props.id}
          placeholder={props.placeholder}
          value={props.value}
          onChange={props.onChange}
        />
      </div>
    </div>
  )
}

export default TextInput
