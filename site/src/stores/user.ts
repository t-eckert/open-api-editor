import { createContext } from "react";
import { User } from "../interfaces/user";

class UserStore {
  user: User = {
    id: "0",
    email: "jc@email.com",
    name: "Jane Cooper",
    profileIcon: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=60",
    isPro: false
  }

  fetchUser() {

  }
}

export const UserStoreContext = createContext(new UserStore())