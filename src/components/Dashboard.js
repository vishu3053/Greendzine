import React, { useState } from 'react';
import './Dashboard.css';
import { FaHome, FaUser } from 'react-icons/fa'; 
import { Link } from 'react-router-dom';
import data from '../data';
const Dashboard = () => {
  const [homeClicked, setHomeClicked] = useState(true);
  const [personClicked, setPersonClicked] = useState(false);
  const no_of_employees = data.length;
  const handleHomeClick = () => {
    console.log('Home button clicked');
    setHomeClicked(true); 
  };

  const handlePersonClick = () => {
    console.log('Person button clicked'); 
    setPersonClicked(true); 
  };

  const days = [
    { name: 'Monday', percentage: 4 },
    { name: 'Tuesday', percentage: 92 },
    { name: 'Wednesday', percentage: 122 },
    { name: 'Thursday', percentage: 93 },
    { name: 'Friday', percentage: 89 },
    { name: 'Saturday', percentage: 98 },
  ];

  return (
    <div className="dashboard-outer-container">
      <div className="dashboard-inner-container">
        <div className="icon-group-46"></div>
        <div className='small-icon'>
          <span className='inner-text'>{no_of_employees}</span>
        </div>
        <div className='big-icon'></div>
        <div className='productivity'>
          <div className='productivity-head'><span className='productivity-text'>Employee Productivity Dashboard</span></div>
        {days.map((day, index) => (
          <div key={index} className="day">
            <div>
              <span className="day-name">Productivity on {day.name}</span>
              <div className="percentage-bar" style={{ width: `${(day.percentage)/1.5}%`}}></div>
            </div>
            <div className="percentage-container">
              <span className="percentage-value">{day.percentage}%</span>
            </div>
          </div>
        ))}
        </div>

        <div className='button-div'>
          <Link to="/dashboard" className={`home ${homeClicked ? 'home-clicked' : ''}`} onClick={handleHomeClick}><FaHome /></Link> 
          <Link to="/user" className={`person ${personClicked ? 'person-clicked' : ''}`} onClick={handlePersonClick}><FaUser /></Link> 
        </div>
      </div>
    </div>
  );
}

export default Dashboard;


