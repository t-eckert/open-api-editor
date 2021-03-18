import { observer } from "mobx-react-lite"
import { useContext } from "react"

import { CommandPaletteStoreContext } from "../../stores/commandPalette"

const CommandPalette = observer(
  (): JSX.Element => {
    const commandPaletteStore = useContext(CommandPaletteStoreContext)

    return commandPaletteStore.isVisible ? (
      <div className="shadow rounded-xl w-full mx-auto max-w-lg">
        <input
          className="w-full px-2 py-1.5 rounded-xl text-sm"
          type="text"
          name="command-palette"
          id="command-palette"
          placeholder="Command palette"
        />
      </div>
    ) : (
      <div></div>
    )
  }
)

export default CommandPalette
