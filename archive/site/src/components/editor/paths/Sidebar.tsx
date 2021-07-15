type Props = {
  activeItem: string
  onItemClick: Function
  operations: Map<string, any>
}

const Sidebar = (props: Props) => {
  const operationKeys = Array.from(props.operations.keys())

  return (
    <ul className="w-28">
      {operationKeys.map((operation) => (
        <li
          className={[
            "py-0.5 font-medium text-sm",
            props.activeItem === operation
              ? "text-yellow-600 font-semibold"
              : "cursor-pointer text-gray-500 hover:text-gray-800",
          ].join(" ")}
          onClick={() => props.onItemClick(operation)}
        >
          {operation}
        </li>
      ))}
    </ul>
  )
}

export default Sidebar
