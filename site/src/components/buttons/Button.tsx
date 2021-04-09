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
      "font-medium text-white rounded-full px-3 py-1 shadow transition bg-yellow-500",
      "hover:bg-yellow-600 hover:text-white focus",
    ].join(" "),
  ],
  [
    "secondary",
    [
      "font-medium text-yellow-500 shadow bg-white px-3 py-1 rounded-full",
      "hover:text-white hover:bg-yellow-500 transition",
      "focus",
    ].join(" "),
  ],
  ["tertiary", "font-medium text-yellow-500 hover:text-yellow-600 transition"],
  ["link", "font-medium text-gray-600 hover:text-gray-900 transition focus"],
])

const Button = (props: Props) => {
  const classes = classRoles.get(props.role) ?? ""

  return (
    <button className={classes} onClick={props.action}>
      {props.children}
    </button>
  )
}

export default Button
