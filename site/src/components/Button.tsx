type Props = {
  role: string;
  children: any;
};

const classRoles = new Map([
  ["primary", ""],
  [
    "secondary",
    "font-medium text-yellow-500 shadow bg-white px-3 py-1 rounded-full hover:text-white hover:bg-yellow-500 transition",
  ],
  ["tertiary", "font-medium text-yellow-500 hover:text-yellow-600 transition"],
]);

const Button = (props: Props) => {
  const classes = classRoles.get(props.role) ?? "";

  return <button className={classes}>{props.children}</button>;
};

export default Button;
