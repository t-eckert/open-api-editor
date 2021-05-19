type Props = {
  value: string
  onChange?: any
  label?: string
  prefix: string
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
        {props.label && (
          <label
            className="block font-medium leading-5 text-gray-700"
            htmlFor={props.id}
          >
            {props.label}
          </label>
        )}
        <span className="block text-sm font-medium leading-5 text-gray-600">
          {props.isOptional ? "Optional" : ""}
        </span>
      </div>
      <div className="mt-1 flex rounded-md shadow-sm">
        <span className="inline-flex items-center pl-3 pr-2 font-normal rounded-l-xl border border-r-0 border-gray-300 bg-gray-50 text-gray-500">
          {props.prefix}
        </span>
        <input
          className="block appearance-none w-full bg-white transition border border-gray-400 hover:border-gray-500 px-3 py-2 leading-tight focus focus:border-yellow-400 flex-1 min-w-0 rounded-none rounded-r-xl focus:ring-indigo-500"
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
