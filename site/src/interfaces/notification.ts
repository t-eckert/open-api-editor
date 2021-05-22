interface Notification {
  notificationKey: string
  title: string
  text: string
  role: "info" | "success" | "error"
  action?: {
    label: string
    behavior: Function
  }
}

export default Notification