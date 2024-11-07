import React, { useState } from 'react';
import Navbar from '../Components/Navbar';
import Card from '../Components/Card';
import Modal from '../Components/Modal'; // Import modal
import wujek from '../images/rowerzysta-pijany.jpg';
import Owujku from '../kroniki/Owujku';
import Oczlowiekunaswini from '../kroniki/Oczlowiekunaswini';
import hogrider from '../images/Hog_Rider_card_render.png'
import Sigma from '../kroniki/Sigma';
import Sigmajpg from '../images/sigmaimg.jpg'
import Fraszka from '../kroniki/Fraszka';
import Wodka from '../images/wodka.jpg'

const Opowiesci = () => {
  const Owujkutext = Owujku;

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({ title: '', content: '' });

  const openModal = (title, content) => {
    setModalContent({ title, content });
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  


  return (
    <>
      <div className="w-full center text-center">
        <Navbar />
        <h1 className="text-indigo-700 text-4xl font-bold font-manrope leading-normal text-center">Parlińskie opowiesci</h1>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 center mt-5'>
          <Card
            name="O wujku co wpadł do rowu"
            text="krótki wierszyk o jednej z głównych postaci czyli wujku"
            img={wujek}
            onClick={() => openModal("O wujku co wpadł do rowu",Owujkutext)}
          />
          <Card
            name="O człowieku na świni"
            text="Kornika z dawnych lat, prawdobodbnie o jedenj z głównych postaci czyli Przemku. Występuje tam również główny bohater"
            img={hogrider}
            onClick={() => openModal("O człowieku na świni", Oczlowiekunaswini)}
          />
          <Card
            name="Sigma"
            text="Tajemnicza kronika, napisana trudnym jezykiem. Niektórzy eksperci mówia że może być podorbiona."
            img={Sigmajpg}
            onClick={() => openModal("Sigma", Sigma)}
          />
          <Card
            name="Fraszka o flaszce"
            text="Kronika o pięknym i życiodajnym napoju."
            img={Wodka}
            onClick={() => openModal("Fraszka o flaszce", Fraszka)}
          />
        </div>
        <Modal
          isOpen={isModalOpen}
          onClose={closeModal}
          title={modalContent.title}
          content={modalContent.content}
        />
      </div>
    </>
  );
};

export default Opowiesci;
