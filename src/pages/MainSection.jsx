import React from "react"

import Header from "../components/Header"
import EventBar from "../components/EventBar"
import EventCard from "../components/EventCard"
import Calendar from "../components/Calendar"

import '../styles/landing.css'

const MainSection = () => {
    const logo1 = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.2} stroke="rgba(124, 77, 255)" className="event_logo">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 2.994v2.25m10.5-2.25v2.25m-14.252 13.5V7.491a2.25 2.25 0 0 1 2.25-2.25h13.5a2.25 2.25 0 0 1 2.25 2.25v11.251m-18 0a2.25 2.25 0 0 0 2.25 2.25h13.5a2.25 2.25 0 0 0 2.25-2.25m-18 0v-7.5a2.25 2.25 0 0 1 2.25-2.25h13.5a2.25 2.25 0 0 1 2.25 2.25v7.5m-6.75-6h2.25m-9 2.25h4.5m.002-2.25h.005v.006H12v-.006Zm-.001 4.5h.006v.006h-.006v-.005Zm-2.25.001h.005v.006H9.75v-.006Zm-2.25 0h.005v.005h-.006v-.005Zm6.75-2.247h.005v.005h-.005v-.005Zm0 2.247h.006v.006h-.006v-.006Zm2.25-2.248h.006V15H16.5v-.005Z" />
                </svg>
    const logo2 = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="rgba(59, 130, 246)" className="event_logo">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg> 
    const logo3 = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="rgba(34, 197, 94)" className="event_logo">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
    const logo4 = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="rgba(236, 72, 153)" className="event_logo">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
                </svg>


    return(
        <div className="landing">
            <div className="main_section">
                <Header />
                <div className="events">
                    <EventCard 
                            logo={logo1} 
                            name="Today's Events" 
                            count="5" 
                            color="rgba(124, 77, 255, 0.18)"
                            border="rgba(124, 77, 255, 0.35)"
                            strong="rgba(124, 77, 255)" />

                    <EventCard 
                            logo={logo2}
                            name="Tasks Pending" 
                            count="3" 
                            color="rgba(59, 130, 246, 0.18)" 
                            border="rgba(59, 130, 246, 0.35)"
                            strong="rgba(59, 130, 246)" />
                    <EventCard 
                            logo={logo3}
                            name="Upcoming" 
                            count="7" 
                            color="rgba(34, 197, 94, 0.18)" 
                            border="rgba(34, 197, 94, 0.35)"
                            strong="rgba(34, 197, 94)" />
                    <EventCard 
                            logo={logo4} 
                            name="Total Events" 
                            count="15" 
                            color="rgba(236, 72, 153, 0.18)" 
                            border="rgba(236, 72, 153, 0.35)"
                            strong="rgba(236, 72, 153)" />
                </div>
                <div className="calendar">
                    <Calendar />
                </div>
            </div>
            <EventBar />
        </div>
    )
}

export default MainSection