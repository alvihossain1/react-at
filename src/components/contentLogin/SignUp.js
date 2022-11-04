import React, { useEffect, useState } from 'react'
import axios from "axios"

export default function SignUp(props) {
  const { handleTabs } = props

  const [fname, setFName] = useState("")
  const [lname, setLName] = useState("")
  const [address, setAddress] = useState("")
  const [stateName, setStateName] = useState("Dhaka")
  const [zip, setZip] = useState("")
  const [gender, setGender] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [termsAndConditions, setTNC] = useState(false)
  const [status, setStatus] = useState("")
  const [statusColor, setstatusColor] = useState("")
  const [buttonDisability, setButtonDisability] = useState(true)

  let states = ["Dhaka", "Sylhet", "Chittagong", "Rajhshahi", "Khulna", "Cox's Bazar"]

  useEffect(() => {
    // let user = {fname, lname, address, stateName, zip, email, password, termsAndConditions}
    // console.log(user)

    if (fname === "" || lname === "" || address === "" || zip === "" || email === "" || password === "" || gender === "" || !termsAndConditions) {
      setButtonDisability(true)
    }
    else {
      setButtonDisability(false)
    }

  }, [fname, lname, address, stateName, zip, email, password, gender, termsAndConditions])

  const handleSubmit = (e) => {
    e.preventDefault()
    let user = { fname, lname, address, stateName, zip, gender, email, password, termsAndConditions }
    console.log(user)

    axios.post("http://localhost:4000/api/signup", user)
      .then((response) => {
        console.log(response.data)
        requestStatus(true)
        setStatus(`Form has been successfully submitted`)
        setstatusColor("text-green-500")
      })
      .catch((err) => {
        console.log("Warning Couldn't Submit", err.message)
        requestStatus(false)
        setStatus(`${err.message}, couldn't submit the form. Try agian`)
        setstatusColor("text-yellow-400")
      })

  }



  function requestStatus(check) {
    if (check) {
      setFName("")
      setLName("")
      setAddress("")
      setStateName("Dhaka")
      setGender("")
      setZip("")
      setEmail("")
      setPassword("")
      setTNC("")
    }
  }

  return (


    <div className="form m-2 bg-black/50 text-pink-500 px-7 py-5 border-8 border-yellow-500/75">
      <div className="heading mb-6">
        <h4 className="text-center text-3xl font-semibold">SignUp</h4>
      </div>
      <div className="grid grid-cols-12 gap-x-4 gap-y-10 text-xl">
        <div className="col-span-12 md:col-span-6">
          <div className="form-block flex flex-col w-full">
            <label className="my-1">First Name</label>
            <input onChange={e => { setFName(e.target.value) }} value={fname} className="border border-2 border-slate-300 py-1.5 px-2.5 text-pink-500 caret-pink-500 focus:outline-none focus:border-pink-500 bg-transparent" type="text" />
          </div>
        </div>
        <div className="col-span-12 md:col-span-6">
          <div className="form-block flex flex-col w-full">
            <label className="my-1">Last Name</label>
            <input onChange={e => { setLName(e.target.value) }} value={lname} className="border border-2 border-slate-300 py-1.5 px-2.5 text-pink-500 caret-pink-500 focus:outline-none focus:border-pink-500 bg-transparent" type="text" />
          </div>
        </div>
        {/* asfasf */}
        <div className="col-span-12 md:col-span-4 lg:col-span-6">
          <div className="form-block flex flex-col w-full">
            <label className="my-1">Address</label>
            <input onChange={e => { setAddress(e.target.value) }} value={address} className="border border-2 border-slate-300 py-1.5 px-2.5 text-pink-500 caret-pink-500 focus:outline-none focus:border-pink-500 bg-transparent" type="text" />
          </div>
        </div>
        <div className="col-span-12 md:col-span-4 lg:col-span-3">
          <div className="form-block flex flex-col w-full">
            <label className="my-1">State</label>
            <select onChange={e => { setStateName(e.target.value) }} className="cursor-pointer border border-2 border-slate-300 py-1.5 px-2.5 text-pink-500 caret-pink-500 focus:outline-none focus:border-pink-500 bg-transparent">
              {states.map((each, index) => {
                return <option key={index} className="cursor-pointer text-white bg-black focus:bg-pink-500" value={each}>{each}</option>
              })}
            </select>
          </div>
        </div>
        <div className="col-span-12 md:col-span-4 lg:col-span-3">
          <div className="form-block flex flex-col w-full">
            <label className="my-1">Zip</label>
            <input onChange={e => { setZip(e.target.value) }} value={zip} className="border border-2 border-slate-300 py-1.5 px-2.5 text-pink-500 caret-pink-500 focus:outline-none focus:border-pink-500 bg-transparent" type="text" />
          </div>
        </div>
        <div className="col-span-12">
          <div className="form-block flex flex-col w-full">
            <label className="my-1">Gender</label>
            <div className='flex gap-4'>
              <div className='flex gap-2'>
                <label className="text-indigo-400 font-semibold">Male</label>
                <input type="radio" onChange={e => { setGender(e.target.value) }} name="gender" value={"male"} className="accent-pink-500 w-3.5" checked={(gender === "male") ? true : false}/>
              </div>
              <div className='flex gap-2'>
                <label className="text-indigo-400 font-semibold">Female</label>
                <input type="radio" onChange={e => { setGender(e.target.value) }} name="gender" value={"female"} className="accent-pink-500 w-3.5" checked={(gender === "female") ? true : false}/>
              </div>
            </div>
          </div>
        </div>
        {/* asfasf */}
        <div className="col-span-12 md:col-span-6">
          <div className="form-block flex flex-col w-full">
            <label className="my-1">Email</label>
            <input onChange={e => { setEmail(e.target.value) }} value={email} className="border border-2 border-slate-300 py-1.5 px-2.5 text-pink-500 caret-pink-500 focus:outline-none focus:border-pink-500 bg-transparent" type="email" />
          </div>
        </div>
        <div className="col-span-12 md:col-span-6">
          <div className="form-block flex flex-col w-full">
            <label className="my-1">Password</label>
            <input onChange={e => { setPassword(e.target.value) }} value={password} className="border border-2 border-slate-300 py-1.5 px-2.5 text-pink-500 caret-pink-500 focus:outline-none focus:border-pink-500 bg-transparent" type="password" />
          </div>
        </div>
        <div className="col-span-12">
          <div className="form-block flex items-center gap-3 pl-1 w-full mt-2">
            <input onChange={e => { setTNC(e.target.checked) }} checked={termsAndConditions} id="checkbox1" className="h-5 w-5 border border-pink-500 cursor-pointer accent-pink-500 bg-transparent" type="checkbox" />
            <label htmlFor="checkbox1">Terms and conditions</label>
            <small className="text-slate-500">I accept all the terms</small>
          </div>
        </div>

        <div style={{ display: status ? "block" : "none" }} className='col-span-12'>
          <div className="form-block font-semibold">
            <p className={statusColor}>{status}</p>
          </div>
        </div>

        <div className='col-span-12'>
          <div className="form-block flex items-center gap-3 pl-1 w-full mt-2 font-semibold">
            <p><small>Go to Login Page<span className='ml-2 text-blue-600 cursor-pointer' onClick={() => { handleTabs("login") }}>Click Here</span></small></p>
          </div>
        </div>

        <div className="col-span-12">
          <div className="form-block flex flex-col w-full mt-2">
            <button className='w-full mb-2.5 cursor-pointer border border-2 border-pink-500 py-2 px-3 text-pink-500 
                            hover:bg-pink-500 hover:text-white transition-color transition-colors duration-300 ease-linear 
                            disabled:text-slate-600 disabled:border-slate-600 disabled:hover:bg-transparent disabled:cursor-default'
              disabled={buttonDisability}
              onClick={handleSubmit}
            >Submit</button>
          </div>
        </div>
      </div>
    </div>


  )
}
