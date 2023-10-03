export interface User { 
    uid: number
    name: string
    email: string
    isLoggedIn: boolean
}

export interface DataState { 
  status:'idle' | 'loading' | 'succeeded' | 'failed';
}
