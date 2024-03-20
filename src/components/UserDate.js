import React from "react";
import './UserDate.css';

function UserDate(props){

    const month = props.date.toLocaleString('en-US', { month: '2-digit' });
    const day = props.date.toLocaleString('en-US', { day: '2-digit' });
    const year = props.date.getFullYear();

    return (
        <div>

            <div className="date">
                <span>DOB:</span> {day}-{month}-{year}
            </div>

        </div>
        
    )
}

export default UserDate;
