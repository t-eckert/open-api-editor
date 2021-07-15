import { observer } from "mobx-react-lite"

import Information from "./information/Information"
import Servers from "./servers/Servers"
import Paths from "./paths/Paths"
import Security from "./security/Security"

const Editor = observer(() => {
  return (
    <div className="pt-8 px-2">
      <Information className="mb-8" />
      <Servers className="mb-8" />
      <Paths className="mb-8" />
      <Security className="mb-8" />
    </div>
  )
})

export default Editor
