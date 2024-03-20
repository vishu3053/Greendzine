import React from 'react';
import './App.css';
import LoginPage from './components/Login';
import DashboardPage from './components/Dashboard';
import User from './components/User';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import data from './data';

function App() {
  return (
    <>
      <div className='App'>
        <Router>
              <Routes>
                <Route path="/" element={<LoginPage />} />
                <Route path="/dashboard" element={<DashboardPage />} />
                <Route path="/user" element={<User data={data} />} />
              </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
