import React, { useEffect, useRef, useState } from 'react'
import Typewriter from 'typewriter-effect';
import SignUp from "./SignUp"
import axios from "axios"
// import PostContainer from './PostContainer'
// import { render } from '@testing-library/react'

export default function Login(props) {

  const { loginFunction } = props

  const [tabs, setTabs] = useState("login")

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [rememberMe, setRememberMe] = useState(false)
  const [loginText, setLoginText] = useState("")
  const [statusColor, setstatusColor] = useState("text-white")
  const [loginButton, setLoginButton] = useState(true)

  const textnot = useRef()

  useEffect(() => {
    if (email === "" || password === "") {
      setLoginButton(true)
      setstatusColor("text-white")
    }
    else {
      setLoginButton(false)
    }
  }, [email, password])


  const handleSubmit = (e) => {
    e.preventDefault()
    // console.log(email)
    // console.log(password)
    // console.log(rememberMe)

    textnot.current.classList.remove("anim-text")
    textnot.current.classList.add("anim-text")
    let time = setTimeout(() => {
      textnot.current.classList.remove("anim-text")
      clearTimeout(time)
    }, 200)



    const user = { email, password, rememberMe }
    console.log("input - ", user)
    // if (email === "alvi_anh@yahoo.com" && password === "1234") {
    //   setLoginText("Successfull")
    //   setstatusColor("text-green-500")
    //   let userRemembers = { email, rememberMe }
    //   console.log(loginFunction(true, userRemembers))
    // }
    // else {
    //   setLoginText("Email or Password doesn't match!")
    //   setstatusColor("text-red-500")
    // }

    axios.post("http://localhost:4000/api/login", user)
      .then((response) => {
        console.log("Server Response - ", response.data)

        if (response.data.length === 0) {
          setLoginText("This user doesn't exist!")
          setstatusColor("text-yellow-500")
        }
        else if (email === response.data[0].email && password === response.data[0].password) {
          setLoginText("Successfull")
          setstatusColor("text-green-500")
          let userRemembers = { email, rememberMe }
          console.log(loginFunction(true, userRemembers))
        }
        else {
          setLoginText("Email or Password doesn't match!")
          setstatusColor("text-red-500")
        }
      })
      .catch((err) => {
        console.log("Warning Couldn't Submit", err.message)
        setLoginText("Couldn't connect due to network error")
        setstatusColor("text-yellow-500")
      })

  }




  const handleTabs = (value) => {
    setTabs(value)
  }

  const loginTab = (
    <div className="form-login m-2 bg-black/50 text-pink-500 px-7 py-5 border-8 border-yellow-500/75" style={{ minWidth: "350px" }}>
      <div className="heading mb-6">
        <h4 className="text-center text-3xl font-semibold">Login</h4>
      </div>

      <div className="inner flex flex-col gap-x-4 gap-y-10 text-lg">
        {/* asfasf */}
        <div className="flex flex-col">
          <label className="my-1">Email</label>
          <input className="border border-2 border-slate-300 py-1.5 px-2.5 text-pink-500 caret-pink-500 focus:outline-none focus:border-pink-500 bg-transparent" type="email" name='email' onChange={(e) => { setEmail(e.target.value) }} />
        </div>


        <div className="flex flex-col">
          <label className="my-1">Password</label>
          <input className="border border-2 border-slate-300 py-1.5 px-2.5 text-pink-500 caret-pink-500 focus:outline-none focus:border-pink-500 bg-transparent" type="password" name='password' onChange={(e) => { setPassword(e.target.value) }} />
        </div>


        <div className="flex items-center gap-3 pl-1 mt-2">
          <input id="checkbox1" className="h-5 w-5 border border-pink-500 cursor-pointer accent-pink-500" type="checkbox" name='rememberMe' onChange={(e) => { setRememberMe(!rememberMe) }} />
          <label htmlFor="checkbox1">Remember Me</label>
        </div>

        <div className='flex flex-col'>
          <p><small>Don't have an account? <span className='text-blue-600 cursor-pointer' onClick={() => { handleTabs("signup") }}>Click for SignUp</span></small></p>
        </div>

        <div style={{ display: (statusColor === "text-white") ? "none" : "block" }} className={`flex flex-col text-center text-white anim-text ${statusColor}`} ref={textnot}>
          <p><small>{loginText}</small></p>
        </div>
      

        <div className="flex flex-col">
          <input className=" mb-2.5 cursor-pointer border border-2 border-pink-500 py-2 px-3 text-pink-500 
                      hover:bg-pink-500 hover:text-white transition-color transition-colors duration-300 ease-linear 
                      disabled:text-slate-600 disabled:border-slate-600 disabled:hover:bg-transparent disabled:cursor-default" type="submit" value={"Login"} onClick={handleSubmit} disabled={loginButton} />
        </div>

      </div>

    </div>
  )



  return (
    <div className='min-h-screen w-full flex flex-col items-center justify-center'>

      <div className='text-3xl font-semibold text-white mb-2 text-yellow-500/75 text-center'>
        <Typewriter
          options={{
            strings: ['You can write down anything', 'Stay anonymous in the posts', 'Something happened today and it was...'],
            autoStart: true,
            loop: true,
          }}
        />
      </div>

      {(tabs === "login") ? loginTab : (tabs === "signup") ? <SignUp handleTabs={handleTabs} /> : "none"}




    </div>
  )
}
