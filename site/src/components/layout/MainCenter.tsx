type Props = {
  className?: string
  children?: any
}

const MainCenter = (props: Props) => {
  return <div className={"flex-grow " + props.className}>{props.children}</div>
}

export default MainCenter
