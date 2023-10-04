import { User } from "./types"
import { Location } from "../common/types"

export const initialState: User = {
    uid: 0,
    fb_uid: "",
    name: "",
    email: "",
    isLoggedIn: false,
}

export const locationState: Location = {
    lng: undefined,
    lat: undefined
}
