import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import Main from './Pages/Main';
import Opowiesci from './Pages/Opowiesci';


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Main />} />
        <Route path="opowiesci" element={<Opowiesci />} />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);