import { observable } from "mobx";

type View = 'documents' | 'editing' | 'settings'

export class RouterStore {
  @observable view: View = "documents"
}