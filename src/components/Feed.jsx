import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { BASE_URL } from '../utils/constants.js';
import { addFeed } from '../utils/feedSlice.js';
import UserCard from './UserCard.jsx';

const Feed = () => {
  const feed = useSelector((state) => state.feed);
  console.log('Feed data:', feed);

  const dispatch = useDispatch();
  
  const getFeedData = async () => {
    if(feed) return;
    try {
      const res = await axios.get(`${BASE_URL}/feed`, { withCredentials: true });
      dispatch(addFeed(res.data.data));
    } catch (error) {
      console.error('Error fetching feed:', error);
    }
  };

  useEffect(() => {
    getFeedData();
  }, []);

  return (
  feed && (<div className='flex justify-center my-10'>
      <div className='w-96 max-w-sm'>
        <UserCard user={feed[0]} />
      </div>
    </div>)
  );
};

export default Feed;