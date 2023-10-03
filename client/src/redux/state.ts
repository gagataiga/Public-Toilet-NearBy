import { User } from "./types"

export const initialState: { user: User } = {
  user: {
    uid: 0,
    name: "",
    email: "",
    isLoggedIn: false,
  }
}
