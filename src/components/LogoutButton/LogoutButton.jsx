import React from 'react'
import { Button } from 'react-bootstrap'
import { useRecoilState } from 'recoil'
import { authData } from '../../atoms/authAtom';
import { toast } from 'react-toastify';

export default function LogoutButton() {
  const [authdata, setAuthData] = useRecoilState(authData);

  function handleLogout(){
    setAuthData({
      isAuth: false,
      user: null
    })
    localStorage.removeItem('loggedInData');
    toast.success('Logged out successfully')
  }

  return (
    <Button onClick={handleLogout}>Logout</Button>
  )
}
