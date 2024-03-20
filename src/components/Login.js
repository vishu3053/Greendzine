import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './Login.css';

function Login(){

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const submitHandler = (e) => {
        e.preventDefault();
        const test_email = 'test123@gmail.com';
        const test_password = 'password';
        if (email === test_email && password === test_password) {
            navigate('/dashboard');
        } else {
            alert('Invalid email or password');
        }
    }

    return(
        
    <div className="dashboard-outer-container">
        <div className="dashboard-inner-container">
        <form onSubmit={submitHandler} className="form-submit">
            <img src="img/Group3.png" alt="Logo" />
            <div className="upper-text">
                #We are Electric
            </div>
            <div className="input-field-2">
                <input 
                    type="email" 
                    placeholder="E-mail" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    required 
                />
            </div>
            <div className="input-field-2">
                <input 
                    type="password" 
                    placeholder="Password" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                    required 
                />
            </div>
            <button type="submit">Login</button>
            <div className="forgot-pwd">
                Forgot Password?
            </div>
        </form> 
        </div>
    </div>
      
    );
}

export default Login;
