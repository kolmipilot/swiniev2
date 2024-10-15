import React from 'react';

const Modal = ({ isOpen, onClose, title, content }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg p-6 max-h-screen max-w-screen-md w-full h-auto rounded-3xl object-cover border-gray-200 border-2">
        <h2 className="text-xl font-bold bg-white">{title}</h2>
        <div className="overflow-y-auto max-h-[70vh] my-4"> {/* Zawijamy wiersz w przewijalny kontener */}
          <p className=" bg-slate-100 text-center px-[5vw] text-lg font-mono font-normal whitespace-break-spaces md:whitespace-pre">{content}</p> {/* Pre with wrapping */}
        </div>
        <button className="mt-4 bg-blue-500 text-white rounded px-4 py-2" onClick={onClose}>
          Zamknij
        </button>
      </div>
    </div>
  );
};

export default Modal;
