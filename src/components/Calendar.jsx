import React from "react"
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";

const Calendar = () =>{
    return(
        <div className="calendar_container">
            <div className="calendar_grid">
                <FullCalendar
                    plugins={[dayGridPlugin, interactionPlugin]}
                    initialView="dayGridMonth"
                    height="100%"
                    contentHeight="100%"
                />
            </div>            
        </div>
    )
}

export default Calendar