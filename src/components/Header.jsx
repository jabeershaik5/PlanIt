import React from "react"

import profile from '../assets/profile.jpg'

const Header = () =>{
    return(
        <div className="header">
            <div className="welcome_msg">
                <p className="wlcm">Good Evening, Jabeer👋 </p>
                <p className="tag">Here's whats been happening with your schedule</p>
            </div>
            <div className="toggles">
                <div className="notification">
                    <div className="notif_icon">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
                        </svg>
                    </div>
                </div>
                <div className="profile">
                    <img src={profile} alt="profile" />
                </div>
            </div>
        </div>
    )
}

export default Header