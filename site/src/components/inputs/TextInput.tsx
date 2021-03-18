type Props = {
  value: string;
  label: string;
  placeholder: string;
  id: string;
  isOptional: boolean;
};

const TextInput = (props: Props) => {
  return (
    <div>
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
          className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-3 py-2 rounded-xl leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          name={props.id}
          id={props.id}
          placeholder={props.placeholder}
        />
      </div>
    </div>
  );
};

export default TextInput;
