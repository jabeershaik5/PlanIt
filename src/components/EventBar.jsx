import React from "react"
// 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

import '../styles/eventbar.css'

const starLogo = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
                </svg>

const EventBar = () =>{
    return(
        <div className="event_bar">
            <div className="create_event">
                <div className="form_title">
                    <div className="star_icon">{starLogo}</div>
                    <p>Add New Event</p>
                </div>
                <div className="event_form">
                    <input type="text" placeholder="Event Title" />
                    <input type="text" placeholder="Location" />
                    <input type="date" placeholder="date" />
                    <div className="event_date">
                        <input type="time" placeholder="start" />
                        <input type="time" placeholder="end" />
                    </div>
                    <input type="text" placeholder="Type" />
                    <input type="text" name="" id="" placeholder="Description" />
                    <button className="add_btn">Add Event</button>
                </div>
            </div>
        </div>
    )
}

export default EventBar