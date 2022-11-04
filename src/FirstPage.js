import React from 'react'
import { useState } from 'react';
import Login from './components/contentLogin/Login';
import PostContainer from './components/PostContainer';


const getLocalItems = () => {
    let session = localStorage.getItem("session")
    console.log(session)
    if (session) {
        return JSON.parse(session)
    }
    else {
        return []
    }
}

export default function FirstPage() {
    
    let imgLink2 = "https://r4.wallpaperflare.com/wallpaper/998/592/1023/red-triangles-low-poly-low-poly-art-wallpaper-48661d4810307c88a01c511e9822548a.jpg"
    const [loginCheck, setloginCheck] = useState(false)
    const [userSessions, setUserSessions] = useState(getLocalItems())


    const login = (some, userRemembers) => {
        setloginCheck(some)
        if (userRemembers.rememberMe) {
            setUserSessions((prev) => {
                return [...prev, { userRemembers }]
            })
            localStorage.setItem("session", JSON.stringify(userRemembers))
        }
    }
    console.log(loginCheck, "---", userSessions.rememberMe)


    return (
        <div className="min-h-screen w-full bg-cover bg-center bg-fixed relative" style={{ backgroundImage: `url(${imgLink2})` }}>
            {(loginCheck || userSessions.rememberMe) ? <PostContainer /> : <Login loginFunction={login} />}
        </div>
    )
}



