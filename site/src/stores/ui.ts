import { observable } from "mobx";
import { createContext } from "react";

import DocumentsView from "../components/views/DocumentsView"
import EditorView from "../components/views/EditorView"
import SettingsView from "../components/views/SettingsView"
import View from "../types/View";

const viewComponents = new Map([
  ["documents", DocumentsView],
  ["editor", EditorView],
  ["settings", SettingsView]
])

class UiStore {
  @observable view: View = "documents"

  get viewComponent(): any {
    return viewComponents.get(this.view)
  }
}

export const UiStoreContext = createContext(new UiStore())