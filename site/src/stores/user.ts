import jwt_decode from "jwt-decode"
import { makeAutoObservable } from "mobx";
import { createContext } from "react";
import { User } from "../interfaces/user";

export class UserStore {
  user: User | null
  jwt: string | null
  status: "loggedIn" | "loggingIn" | "loggedOut"

  stateToken: string = ""

  constructor() {
    makeAutoObservable(this)

    this.jwt = localStorage.getItem("JWT")
    if (this.jwt) {
      this.user = jwt_decode<User>(this.jwt)
      this.status = "loggedIn"
    }
    else {
      this.user = null
      this.status = "loggedOut"
    }
  }

  setUserFromJwt(jwt: string) {
    this.user = jwt_decode<User>(jwt)
    this.jwt = jwt
    this.status = "loggedIn"
    localStorage.setItem("JWT", jwt)
  }

  logoutUser() {
    this.user = null
    this.jwt = null
    this.status = "loggedOut"
    localStorage.removeItem("JWT")
  }
}

export const UserStoreContext = createContext(new UserStore())