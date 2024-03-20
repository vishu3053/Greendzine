import React, { useState } from 'react';
import { FaHome, FaUser } from 'react-icons/fa'; 
import './User.css';
import Card from "./Card";
import { Link } from 'react-router-dom';
import { CiSearch } from "react-icons/ci";

function User(props){
    const data = props.data;
    const [searchQuery, setSearchQuery] = useState("");
    const [homeClicked, setHomeClicked] = useState(false);
    const [personClicked, setPersonClicked] = useState(true);
    const no_of_employees  = data.length;

    const handleSearch = (event) => {
        setSearchQuery(event.target.value);
    };

    const filteredData = data.filter((user) => {
        const { id, name } = user;
        const lowerCaseQuery = searchQuery.toLowerCase();
        return String(id).includes(lowerCaseQuery) || name.toLowerCase().includes(lowerCaseQuery);
    });

    const handleHomeClick = () => {
        setHomeClicked(true); 
    };

    const handlePersonClick = () => {
        setPersonClicked(true); 
    };

    const displayedData = searchQuery ? filteredData : data.slice(0, 2);

    return(
        <div className="User">
            <div className="User-inner-container">
                <div className="icon-group-46"></div>
                <div className='small-icon'>
                    <span className='inner-text'>{no_of_employees}</span>
                </div>
                <div className='big-icon'></div>

                <div className="Search-field"> 
                    <input type="text" placeholder="Search with name" value={searchQuery} onChange={handleSearch} />
                </div>
                
                <div className="search-logo">
                    <CiSearch />
                </div>
                

                <div className="container">
                    {
                        displayedData.map((user) => {
                            return <Card key={user.id} {...user}/>
                        })
                    }
                </div>
                <div>
                    <div className='button1-div'>
                        <Link to="/dashboard" className={`home1 ${homeClicked ? 'home1-clicked' : ''}`} onClick={handleHomeClick}><FaHome /></Link> 
                        <Link to="/user" className={`person1 ${personClicked ? 'person1-clicked' : ''}`} onClick={handlePersonClick}><FaUser /></Link> 
                    </div>
                </div>
            </div>
        </div>
    );
}

export default User;
