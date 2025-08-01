import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BASE_URL } from '../utils/constants.js';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice.js';

const EditProfile = ({ user }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [about, setAbout] = useState('');
  const [photoUrl, setPhotoUrl] = useState('');

  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const dispatch = useDispatch();

  // Fetch user on mount if not passed via props
  useEffect(() => {
    const initializeUser = async () => {
      try {
        if (user) {
          // use prop if available
          setFirstName(user.firstName || '');
          setLastName(user.lastName || '');
          setAge(user.age || '');
          setGender(user.gender || '');
          setAbout(user.about || '');
          setPhotoUrl(user.photoUrl || '');
        } else {
          // fallback to backend fetch
          const res = await axios.get(BASE_URL + "/profile/view", {
            withCredentials: true,
          });
          const data = res.data.data;
          setFirstName(data.firstName || '');
          setLastName(data.lastName || '');
          setAge(data.age || '');
          setGender(data.gender || '');
          setAbout(data.about || '');
          setPhotoUrl(data.photoUrl || '');
          dispatch(addUser(data));
        }
      } catch (err) {
        console.error("Failed to load profile:", err);
        setError("Failed to load profile. Please refresh.");
      }
    };

    initializeUser();
  }, [user, dispatch]);

  const saveProfile = async () => {
    try {
      setError('');
      setSuccess('');

      const res = await axios.patch(
        BASE_URL + "/profile/edit",
        { firstName, lastName, age, gender, about, photoUrl },
        { withCredentials: true }
      );

      dispatch(addUser({ firstName, lastName, age, gender, about, photoUrl }));
      setSuccess('Profile updated successfully');
    } catch (err) {
      console.error('Error saving profile:', err);
      setError('Failed to save profile. Please try again.');
    }
  };

  return (
    <div className="flex justify-center my-10">
      <div className="flex flex-row gap-x-10 items-start">
        <div className="card bg-base-300 w-96 shadow-xl">
          <div className="card-body">
            <h2 className="card-title justify-center mb-6">Edit Profile</h2>

            <label className="form-control w-full mb-4">
              <div className="label">
                <span className="label-text">First Name</span>
              </div>
              <input
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="input input-bordered w-full"
              />
            </label>

            <label className="form-control w-full mb-4">
              <div className="label">
                <span className="label-text">Last Name</span>
              </div>
              <input
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="input input-bordered w-full"
              />
            </label>

            <label className="form-control w-full mb-4">
              <div className="label">
                <span className="label-text">Age</span>
              </div>
              <input
                type="number"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                className="input input-bordered w-full"
              />
            </label>

            <label className="form-control w-full mb-4">
              <div className="label">
                <span className="label-text">Gender</span>
              </div>
              <input
                type="text"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                className="input input-bordered w-full"
              />
            </label>

            <label className="form-control w-full mb-4">
              <div className="label">
                <span className="label-text">About</span>
              </div>
              <textarea
                value={about}
                onChange={(e) => setAbout(e.target.value)}
                className="textarea textarea-bordered w-full"
              />
            </label>

            <label className="form-control w-full mb-4">
              <div className="label">
                <span className="label-text">Photo URL</span>
              </div>
              <input
                type="url"
                value={photoUrl}
                onChange={(e) => setPhotoUrl(e.target.value)}
                className="input input-bordered w-full"
              />
            </label>

            <div className="card-actions justify-center flex-col gap-y-2">
              {error && <p className="text-red-500">{error}</p>}
              {success && <p className="text-green-500">{success}</p>}
              <button className="btn btn-primary w-full" onClick={saveProfile}>
                Save Profile
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
