import { User } from "./types"

export const initialState: { user: User } = {
  user: {
    uid: 0,
    fb_uid: "",
    name: "",
    email: "",
    isLoggedIn: false,
  }
}
