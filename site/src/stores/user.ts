import jwt_decode from "jwt-decode"
import { createContext } from "react";
import { User } from "../interfaces/user";
// Some test user data
// {
//   id: "0",
//   email: "jc@email.com",
//   name: "Jane Cooper",
//   profileIcon: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=60",
//   isPro: false
// }
class UserStore {
  user: User | null
  jwt: string | null

  stateToken: string = ""

  constructor() {
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
}

export const UserStoreContext = createContext(new UserStore())