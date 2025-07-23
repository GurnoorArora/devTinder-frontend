import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { BASE_URL } from '../utils/constants.js';
import { addFeed } from '../utils/feedSlice.js';

const Feed = () => {
  const feed=useSelector((state) => state.feed);
    console.log('Feed data:', feed);

   const dispatch = useDispatch();
  const getFeedData = async () => {
    if(feed) return;
    try {
      const res = await axios.get(`${BASE_URL}/feed`, { withCredentials: true });
      dispatch(addFeed(res.data));
    } catch (error) {
      console.error('Error fetching feed:', error);
    }
  };
  useEffect(() => {
    getFeedData();
  },[]);
  return <div>Feed</div>;
};


export default Feed