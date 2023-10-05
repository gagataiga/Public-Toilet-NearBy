
export interface NavLink { 
  to: string;
  label: string;
}

export interface UserInfo { 
    username: string
    email: string,
    password: string,
    fb_uid: string,
}

export interface Location { 
    lng: number | undefined
    lat: number | undefined
}