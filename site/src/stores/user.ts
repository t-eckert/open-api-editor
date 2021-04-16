import { makeAutoObservable } from "mobx";
import { createContext } from "react";

import { parseTokenToUser } from "../functions"
import { User } from "../interfaces";

type Status = "checkingIsLoggedIn" | "loggedIn" | "loggingIn" | "loggingOut" | "loggedOut"

/** `UserStore` MobX class
 * 
 * Handles state for user authentication and data
 */
export class UserStore {
  user?: User | null
  jwt: string | null
  status: Status

  stateToken: string = ""

  constructor() {
    makeAutoObservable(this)

    this.status = "checkingIsLoggedIn"
    this.jwt = localStorage.getItem("JWT")
    if (this.jwt) {
      this.setUserFromJwt(this.jwt)
    }
    else {
      this.user = null
      this.status = "loggedOut"
    }
  }

  setStatus(status: Status) {
    this.status = status
  }

  setUserFromJwt(jwt: string) {
    this.status = "loggingIn"
    this.user = parseTokenToUser(jwt)
    this.jwt = jwt
    localStorage.setItem("JWT", jwt)
    this.status = "loggedIn"
  }

  logoutUser() {
    this.status = "loggingOut"
    this.user = null
    this.jwt = null
    localStorage.removeItem("JWT")
    this.status = "loggedOut"
  }

  isAuthenticated() {
    return (this.jwt !== null && this.status === "loggedIn")
  }
}

export const UserStoreContext = createContext(new UserStore())