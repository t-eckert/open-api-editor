type Role = "primary" | "secondary" | "tertiary" | "link"

type Props = {
  role: Role
  action: any
  children: any
}

const classRoles = new Map([
  [
    "primary",
    [
      "font-medium text-white rounded-full px-3 py-1 shadow transition select-none bg-yellow-500",
      "hover:bg-yellow-600 hover:text-white focus",
    ].join(" "),
  ],
  [
    "secondary",
    [
      "font-medium text-yellow-500 shadow bg-white px-3 py-1 select-none rounded-full",
      "hover:text-white hover:bg-yellow-500 transition",
      "focus",
    ].join(" "),
  ],
  [
    "tertiary",
    "font-medium text-yellow-500 select-none hover:text-yellow-600 transition",
  ],
  ["link", "font-medium text-gray-600 hover:text-gray-900 transition focus"],
])

const Button = (props: Props) => {
  const className = classRoles.get(props.role) ?? ""

  return (
    <button className={className} onClick={props.action}>
      {props.children}
    </button>
  )
}

export default Button
