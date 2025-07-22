import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { useNavigate } from 'react-router-dom';
import { BASE_URL } from '../utils/constants';
const Login = () => {
  const [emailId, setEmailId] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

 /* const handleSubmit = (e) => {
    e.preventDefault()
    // Handle login logic here
  }*/
  const handleLogin = async () => {
    // Handle login logic here
    try {
      const response = await axios.post(`${BASE_URL}/login`, { emailId, password },{ withCredentials: true });
      console.log('Login successful:', response.data);
      // Redirect or update state as needed
      dispatch(addUser(response.data));
      return navigate('/'); // Redirect to profile page after login
    } catch (error) {
      console.error('Login failed:', error);
      // Handle error (e.g., show error message)
    }
  }

  return (
        <div className="flex justify-center py-10 mb-10 ">
      <div className="card bg-base-300 w-96 shadow-xl   ">
        <div className="card-body">
          <h2 className="card-title justify-center mb-6">Login</h2>
          
          {/* Email Input */}
          <label className="form-control w-full mb-4">
            <div className="label mt-2">
              <span className="label-text">Email</span>
            </div>
            <input type="email" value={emailId} onChange={(e) => setEmailId(e.target.value)} placeholder="Enter your email" className="input input-bordered w-5/6" />
          </label>

          {/* Password Input */}
          <label className="form-control w-full mb-6">
            <div className="label">
              <span className="label-text">Password</span>
            </div>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter your password" className="input input-bordered w-5/6" />
          </label>

          <div className="card-actions justify-center">
            <button className="btn btn-primary w-full" onClick={handleLogin}>Login</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login