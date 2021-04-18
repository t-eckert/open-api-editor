import { observer } from "mobx-react-lite"

import { useStatuses } from "../../hooks"

import Status from "./Status"

const Alerts = observer(() => {
  const statuses = useStatuses()

  return (
    <div className="fixed z-50 bottom-2 right-2 flex flex-col-reverse gap-2 items-end">
      {statuses.map((status) => (
        <Status text={status} key={status} />
      ))}
    </div>
  )
})

export default Alerts
