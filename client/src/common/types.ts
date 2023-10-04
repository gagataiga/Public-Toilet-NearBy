
export interface NavLink { 
  to: string;
  label: string;
}

export interface UserInfo { 
  user: {   
    fb_uid: string,
    email: string,
    password: string,
    username: string
  }
}

export interface Location { 
    lng: number | undefined
    lat: number | undefined
}