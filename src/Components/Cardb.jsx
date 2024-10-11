import React from 'react';

function Card({ name, text, img, onClick }) {
  return (
    <>
      <button
        data-modal-target="default-modal"
        data-modal-toggle="default-modal"
        type="button"
        className="flex flex-col items-center bg-white border border-light-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-light-100 m-auto p-10 w-full h-full"
        onClick={onClick} // Dodanie obsługi kliknięcia
      >
        <img
          className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
          src={img}
          alt=""
        />
        <div className="flex flex-col justify-between p-4 leading-normal bg-white">
          <h5 className="mb-2 text-2xl font-bold tracking-tight bg-white">{name}</h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 bg-white">{text}</p>
        </div>
      </button>
    </>
  );
}

export default Card;