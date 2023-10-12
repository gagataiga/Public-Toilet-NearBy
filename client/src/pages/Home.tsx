import React, { useEffect } from 'react'
import { setUserAuth } from '../redux/authSlice';
import { getUserInfo } from '../api/userService';
import { auth } from '../firebase.conf';
import { onAuthStateChanged } from "firebase/auth";
import { useAppSelector, useAppDispatch } from '../redux/hooks';
import Map from '../components/Map';

function Home() {
  const dispatch = useAppDispatch();
  const userState = useAppSelector(state => state.user);
  
  const handleAuthStateChange = async (user: any) => { 
    if (user && (userState.fb_uid !== user.uid)) { 
      try {   
        const { user_id, username, email } = await getUserInfo(user.uid);
        dispatch(setUserAuth({
          uid: user_id,
          fb_uid: user.uid,
          name: username,
          email: email,
          isLoggedIn: true
        }));
      } catch (error) {
        console.error(error);
      }
    }
  }

  useEffect(() => {
    const unsubScribed = onAuthStateChanged(auth, handleAuthStateChange);
    return () => unsubScribed();
  }, []);
  

  return (
    <div>
      <main>
        <div className='search'>search box</div>
        <Map isPost={false}/>
      </main>
    </div>
  )
}

export default Home