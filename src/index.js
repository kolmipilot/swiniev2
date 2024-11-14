import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import Main from './Pages/Main';
import Opowiesci from './Pages/Opowiesci';
import Bohaterowie from './Pages/Bohaterowie';
import Kontakt from './Pages/Kontakt';
import Generator from './Pages/Generatorpage';
import Gra from './Pages/Gra';
import Zombiegra from './Pages/Zombiegra.jsx';


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" index element={<Main />} />
        <Route path="opowiesci" element={<Opowiesci />} />
        <Route path="bohaterowie" element={<Bohaterowie />} />
        <Route path="kontakt" element={<Kontakt />} />
        <Route path="generator" element={<Generator />}/>
        <Route path="gra" element={<Gra />}/>
        <Route path="zombiegra" element={<Zombiegra />}/>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);