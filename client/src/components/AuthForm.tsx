import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./AuthFrom.css";
import { signIn, signUp } from '../redux/authSlice';
import { useAppSelector, useAppDispatch } from '../redux/hooks';
import { useNavigate } from 'react-router-dom';

function AuthForm(){
  const [email, setEmail] = useState<string>("hoge@gmail.com");
  const [password, setPassword] = useState<string>("hogehoge");
  const [isSignUp, setIsSignUp] = useState<boolean>(false);
  const [userName, setUserName] = useState<string>("hoge");

  const dispatch = useAppDispatch();
  const userState = useAppSelector((state) => state);
  const navigate = useNavigate();

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

  // handle input fields
  const handleFields = (e:any, setForm:React.Dispatch<React.SetStateAction<string>>):void => { 
    const { value } = e.target;
    setForm(value);
  }

  const handleSubmit = async(e: any) => { 
    e.preventDefault();
    try {   
      if (isSignUp) {
        // signup
        await dispatch(signUp(email, password, userName));
      } else {
        // signIn
        await dispatch(signIn(email, password));
      }
      //navigate when user logs in or signs up successfully
      if (userState.user.isLoggedIn) { 
        navigate("/");
      }
      
    } catch (error) {
      console.error(error);
    }
  }
  console.log(userState);
  
  return (
    <div className='form__container'>
    <Box component="form" className='form' onSubmit={handleSubmit}>
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
          <Button type="submit" variant="contained" id='submit__btn'>
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