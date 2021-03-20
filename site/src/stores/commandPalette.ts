
import { createContext } from "react"

class CommandPaletteStore {
  isVisible: boolean

  constructor() {
    this.isVisible = false
  }
}

export const CommandPaletteStoreContext = createContext(new CommandPaletteStore())