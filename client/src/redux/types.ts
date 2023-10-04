export interface User { 
    uid: number
    fb_uid:string
    name: string
    email: string
    isLoggedIn: boolean
}

export interface DataState { 
  status:'idle' | 'loading' | 'succeeded' | 'failed';
}
