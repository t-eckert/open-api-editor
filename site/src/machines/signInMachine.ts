import { createMachine } from "xstate";

type SignInContext = {

}

const signInMachine = createMachine<SignInContext>({
  id: "signIn",
  initial: "signedOut",
  states: {
    signedOut: {
      on: { TOGGLE: "" }
    },
    signInRequested: {
      on: { TOGGLE: "inactive" }
    },
    signedIn: {},
    signOutRequested: {}
  }
});

export default signInMachine