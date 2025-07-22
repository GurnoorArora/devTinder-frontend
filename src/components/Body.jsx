import React, { useEffect } from 'react';
import NavBar from './NavBar.jsx';
import { Outlet, useNavigate } from 'react-router-dom';
import Footer from './Footer.jsx';
import { BASE_URL } from '../utils/constants.js';
import { useDispatch, useSelector } from 'react-redux';
import { addUser } from '../utils/userSlice.js';
import axios from 'axios';

const Body = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userData = useSelector((state) => state.user);

  useEffect(() => {
    if (!userData) {
      const fetchUser = async () => {
        try {
          const res = await axios.get(`${BASE_URL}/profile/view`, {
            withCredentials: true,
          });
          dispatch(addUser(res.data));
          console.log('Fetched user:', res.data);
        } catch (error) {
          console.error('Error fetching user:', error);
          if (error.response?.status === 401) {
            navigate('/login'); // redirect to login if not authenticated
          }
        }
      };

      fetchUser();
    }
  }, [dispatch, navigate, userData]);

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Body;
