import jwt_decode from "jwt-decode"
import { makeAutoObservable } from "mobx";
import { createContext } from "react";
import { User } from "../interfaces/user";

class UserStore {
  user: User | null
  jwt: string | null

  stateToken: string = ""

  constructor() {
    makeAutoObservable(this)

    this.jwt = localStorage.getItem("JWT")
    if (this.jwt)
      this.user = jwt_decode<User>(this.jwt)
    else
      this.user = null
  }

  setUserFromJwt(jwt: string) {
    this.user = jwt_decode<User>(jwt)
    this.jwt = jwt
    localStorage.setItem("JWT", jwt)
  }

  logoutUser() {
    this.user = null
    this.jwt = null
    localStorage.removeItem("JWT")
  }
}

export const UserStoreContext = createContext(new UserStore())