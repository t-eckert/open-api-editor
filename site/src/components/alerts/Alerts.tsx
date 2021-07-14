import { observer } from "mobx-react-lite"

import { useAlerts } from "../../hooks"

import Notification from "./Notification"
import Status from "./Status"

const Alerts = observer(() => {
  const alertStore = useAlerts()

  const notifications = alertStore.getNotifications()
  const statuses = alertStore.getStatuses()

  return (
    <div className="fixed z-50 bottom-2 right-2 flex flex-col-reverse gap-2 items-end">
      {statuses.map((status) => (
        <Status text={status.text} key={status.statusKey} />
      ))}
      {notifications.map((notification) => (
        <Notification
          key={notification.notificationKey}
          notificationKey={notification.notificationKey}
          title={notification.title}
          text={notification.text}
          role={notification.role}
        />
      ))}
    </div>
  )
})

export default Alerts
