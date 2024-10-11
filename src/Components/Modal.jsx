import React from 'react';

const Modal = ({ isOpen, onClose, title, content }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-xl font-bold">{title}</h2>
        <p>{content}</p>
        <button className="mt-4 bg-blue-500 text-white rounded px-4 py-2" onClick={onClose}>
          Zamknij
        </button>
      </div>
    </div>
  );
};

export default Modal;