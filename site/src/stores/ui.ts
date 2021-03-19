import { createContext } from "react";

import View from "../types/View";

class UiStore {
  view: View = "documents"

  updateView(view: View) {
    console.log("View changed to " + view)
    this.view = view
  }
}

export const UiStoreContext = createContext(new UiStore())