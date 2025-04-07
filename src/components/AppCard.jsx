import React from 'react';

const AppCard = ({ title, description, link }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 max-w-xs w-full">
      <h2 className="text-xl font-bold">{title}</h2>
      <p className="text-gray-600">{description}</p>
      <a href={link} target="_blank" rel="noopener noreferrer" className="text-blue-500 mt-4 inline-block">Visit the app</a>
    </div>
  );
}

export default AppCard;
