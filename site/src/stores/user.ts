import jwt_decode from "jwt-decode"
import { makeAutoObservable } from "mobx";
import { createContext } from "react";

import { User } from "../interfaces";

/** `UserStore` MobX class
 * 
 * Handles state for user authentication and data
 */
export class UserStore {
  user?: User | null
  jwt: string | null
  status: "checkingIsLoggedIn" | "loggedIn" | "loggingIn" | "loggingOut" | "loggedOut"

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

  setUserFromJwt(jwt: string) {
    this.status = "loggingIn"
    this.user = jwt_decode<User>(jwt)
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
}

export const UserStoreContext = createContext(new UserStore())