import { useContext } from "react"

import { AlertStore, AlertStoreContext } from "../stores/alert"

const useAlerts = (): AlertStore => {
  return useContext(AlertStoreContext)
}

export default useAlerts