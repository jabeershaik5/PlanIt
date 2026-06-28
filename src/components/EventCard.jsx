import React from "react"

import '../styles/landing.css'

const EventCard = ({logo,name,count,color,border,strong}) =>{
    return(
        <div className="evet_card" style={{background:color, border:`1px solid ${border}`}}>
            <div className="event_icon">
                <div className="event_logo_container" style={{backgroundColor:border}}>{logo}</div>
            </div>
            <div className="event_data">
                <p className="event_name">{name}</p>
                <p className="event_count" style={{color:strong}}>{count}</p>
                <p className="view_event" style={{color:strong}}>view all</p>
            </div>
        </div>
    )
}

export default EventCard