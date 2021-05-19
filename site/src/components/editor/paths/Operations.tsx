import { useState } from "react"

import Operation from "./Operation"
import Sidebar from "./Sidebar"

const PathSettings = () => {
  const [active, setActive] = useState("GET")

  const operations = new Map([
    ["GET", <Operation title="GET" />],
    ["PUT", <Operation title="PUT" />],
    ["POST", <Operation title="POST" />],
    ["DELETE", <Operation title="DELETE" />],
    ["OPTIONS", <Operation title="OPTIONS" />],
    ["HEAD", <Operation title="HEAD" />],
    ["PATCH", <Operation title="PATCH" />],
    ["TRACE", <Operation title="TRACE" />],
  ])

  return (
    <div className="p-4 bg-white rounded-b-xl flex flex-row">
      <Sidebar
        activeItem={active}
        onItemClick={(operation: string) => {
          setActive(operation)
        }}
        operations={operations}
      />
      {operations.get(active)}
    </div>
  )
}

export default PathSettings
