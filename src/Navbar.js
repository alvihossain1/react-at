import React from 'react'

export default function Navbar() {
    return (
        <div style={{position:"absolute" ,zIndex: "3"}}>
            <nav className="mynav-container">
                <div className="mynav">
                    <div className="a-link logo-anchor" href="/">
                        <h1>Anym-<span>Tweets</span></h1>
                    </div>
                    <ul>
                        <li><p href="/" className="a-link nav-a active">Global</p></li>
                        <li><p href="/" className="a-link nav-a ">My-Tweets</p></li>
                        <li><p href="/" className="a-link nav-a ">Logout</p></li>
                        <div className="drop-container">
                            <div className="drop-button">
                                <li><p className="a-link">More</p></li>
                            </div>
                            <div className="drop-box">
                                <li><p className="a-link">View Profile</p></li>
                                <li><p className="a-link">Settings</p></li>
                                <li><p className="a-link mode-changer">Change Mode</p></li>
                            </div>
                        </div>
                    </ul>
                    <i className="menubar-icon fa-sharp fa-solid fa-bars fa-2x"></i>
                </div>

                <div className="collapsed-nav"></div>

            </nav>
        </div>
    )
}
