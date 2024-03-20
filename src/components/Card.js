import React from "react";
import UserDate from "./UserDate";
import './Card.css';

function Card({id, name, dob, role}){

    return (
        <div className="user-details">

            <div className="ID">
                {id}
            </div>

            <div className="user-id">
                    EMP ID:{<span>{id}</span>} 
            </div>

            <div className="user-name">
                Name: {name}
            </div>

            <UserDate date={dob} />

            <div className="user-role">
                Role: {role}
            </div>
        </div>
    );
}

export default Card;


