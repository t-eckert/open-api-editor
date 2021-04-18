type Props = {
  wrappingClasses: string
  children: any
}

const Menu = (props: Props) => {
  const menuClasses = [
    "rounded-xl shadow bg-white ring-1 ring-black ring-opacity-5 focus:outline-none",
    props.wrappingClasses,
  ].join(" ")

  return (
    <div className={menuClasses}>
      <div className="py-1" role="none">
        {props.children}
      </div>
    </div>
  )
}

export default Menu
