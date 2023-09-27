import React, { useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./AuthFrom.css";

function AuthForm(){
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isSignUp, setIsSignUp] = useState<boolean>(false);
  const [userName, setUserName] = useState<string>("");
  
  const authMessages: { tologin: string, toSignUp: string, login:string,signUp:string } =
  {
    tologin: "Already have an account? Go to login",
    toSignUp: "First time here? Join us!",
    login: "LOGIN",
    signUp: "SIGN-UP"
  };

  const handleAuthForm = ():void => { 
    setIsSignUp(!isSignUp);

  } 

  const handleFields = (e:any, setForm:React.Dispatch<React.SetStateAction<string>>):void => { 
    const { value } = e.target;
    setForm(value);
  }

  return (
    <div className='form__container'>
    <Box component="form" className='form' >
      <div className='form__fields'>
          <TextField id="email" label="Email" variant="standard" value={email} onChange={e => { handleFields(e,setEmail) }} />
      </div>
        
      <div className='form__fields'>
          <TextField id="password" label="Password" variant="standard" value={password} type="password" onChange={(e) => {handleFields(e,setPassword) }} />
      </div>
        {isSignUp && (
          <div className='form__fields'>
            <TextField id="name" label="Name" variant="standard" value={userName} onChange={(e) => {handleFields(e,setUserName)}} />
          </div>
          )}
      <div className='form__fields'>
          <Button variant="contained" id='submit__btn'>
          {isSignUp ? authMessages.signUp : authMessages.login}
        </Button>
      </div>
    </Box>
      <div className='auth-change'>
        <button className='auth-change__btn' onClick={handleAuthForm}>
          {isSignUp ? authMessages.tologin : authMessages.toSignUp}
        </button>
      </div>
    </div>
  )
}

export default AuthForm