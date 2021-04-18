type Props = {
  className?: string
}

const MainCenter: React.FC<Props> = (props) => {
  return <div className={"flex-grow " + props.className}>{props.children}</div>
}

export default MainCenter
