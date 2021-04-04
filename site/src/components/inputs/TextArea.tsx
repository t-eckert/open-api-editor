type Props = {
  value: string
  label: string
  placeholder: string
  id: string
  isOptional: boolean
  className?: string
}

const TextArea = (props: Props) => {
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
          {props.isOptional && "Optional"}
        </span>
      </div>
      <div className="flex-grow relative rounded-xl shadow-sm">
        <textarea
          className="block appearance-none h-full w-full bg-white border border-gray-400 hover:border-gray-500 px-3 py-2 rounded-xl leading-tight focus focus:border-yellow-400"
          name={props.id}
          id={props.id}
          placeholder={props.placeholder}
        />
      </div>
    </div>
  )
}

export default TextArea
