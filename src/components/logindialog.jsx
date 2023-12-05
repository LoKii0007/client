import React, { useContext } from 'react'
import { GoogleLogin } from '@react-oauth/google'
import { jwtDecode } from "jwt-decode"
import AccountContext from '../context/accoountcontext'
import { adduser } from '../service/api'

import '../css/logindialog.css'

const LoginDialog = () => {

  const { setAccount } = useContext(AccountContext)

  const loginCredentials = async (res) => {
    const decoded = jwtDecode(res.credential)
    setAccount(decoded)
    await adduser(decoded)
  }

  const loginError = () => {
    console.log("login failed")
  }

  return (
    <>
      <div className="header" />
      <div className="top">
        <img src="" alt="" />
        <div className="top-heading">
          whatsapp web
        </div>
      </div>
      <div className="conatiner d-flex flex-row justify-content-between">
        <div className="left ms-4 mt-5">
          <div className="heading text-center">
            <h1>Use whatsapp on your computer</h1>
          </div>
          <div className="body mt-5">
            <ol>
              <li className='points my-3'>open whatsapp on your phone</li>
              <li className='points my-3'>go to settings by tapping on your profile photo, menu or settings</li>
              <li className='points my-3'>tap linked devices and then Link a device</li>
              <li className='points my-3'>point your phone to this screen and scan this qr code</li>
            </ol>
          </div>
        </div>
        <div className="right mx-5 mt-5 d-flex justify-content-center">
          <img className='d-flex justify-content-center position-relative' src="qr.webp" alt="" />
          <div className="login-box">
            <GoogleLogin
              onSuccess={loginCredentials}
              onError={loginError}
            />
          </div>
        </div>
        <br />

      </div>
    </>
  )
}

export default LoginDialog
