import { observer } from "mobx-react-lite"
import { useStatuses } from "../hooks"

import LoadingIcon from "./icons/LoadingIcon"

const Status = (props: { text?: string }) => (
  <div className="bg-white px-4 py-2 shadow flex flex-row items-center rounded-full">
    <LoadingIcon className="animate-spin -ml-1 mr-3 h-5 w-5 text-yellow-600" />
    <div className="text-sm font-medium">{props.text}</div>
  </div>
)

const Statuses = observer(() => {
  const statuses = useStatuses()

  return (
    <div className="fixed z-50 bottom-2 right-2 flex flex-col-reverse gap-2 items-start">
      {statuses.map((status) => (
        <Status text={status} key={status} />
      ))}
    </div>
  )
})

export default Statuses
