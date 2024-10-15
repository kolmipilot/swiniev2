import React from 'react';

const Footer = ({ text }) => {
  return (
    <footer className="bg-gray-800 text-white py-4 text-center">
      <p className='bg-gray-800 text-white'>{text}</p>
    </footer>
  );
};

export default Footer;
