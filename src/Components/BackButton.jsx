import React from 'react';
import { useNavigate } from 'react-router-dom';

const BackButton = () => {
    const navigate = useNavigate();

    const handleBackClick = () => {
        navigate(-1); // Powrót do poprzedniej lokalizacji w historii
    };

    return (
        <button
            onClick={handleBackClick}
            className="fixed top-4 left-4 bg-blue-500 text-white px-4 py-2 rounded shadow hover:bg-blue-600 transition"
        >
            Powrót
        </button>
    );
};

export default BackButton;
