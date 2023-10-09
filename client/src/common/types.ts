
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

export interface UserPost {
  comment: string
  user_id: number
  cost: string
  facilities: number[]
  location_id: number
  image_url: string
  rating: number
}