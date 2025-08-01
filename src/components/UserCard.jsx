import React from 'react';

const UserCard = ({ user }) => {
  console.log('UserCard data:', user);
  const { firstName, lastName, about, age, gender } = user || {};
  return (
    <div className="card bg-base-100 w-48 shadow-md border border-gray-700 mx-auto">
      <figure className="h-24">
        <img
          src="https://geographyandyou.com/images/user-profile.png"
          alt="User"
          className="w-50 h-50 object-cover"
        />
      </figure>
      <div className="card-body p-2">
        <h2 className="card-title text-xs font-semibold text-center">
          {firstName + ' ' + lastName}
        </h2>
        {age && gender && (
          <p className="text-xs text-center text-gray-500">
            {age} years old, {gender}
          </p>
        )}
        <p className="text-xs text-center text-gray-400 mt-1 line-clamp-2">
          {about || "No description available"}
        </p>
        <div className="card-actions justify-center mt-2 gap-1">
          <button className="btn btn-error btn-xs">Pass</button>
          <button className="btn btn-success btn-xs">Like</button>
        </div>
      </div>
    </div>
  );
};

export default UserCard;