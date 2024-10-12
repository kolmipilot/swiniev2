import React, { useState } from 'react';
import Navbar from '../Components/Navbar';
import Card from '../Components/Card';
import Modal from '../Components/Modal'; // Import modal
import wujek from '../images/rowerzysta-pijany.jpg';
import Owujku from '../kroniki/Owujku';
import Oczlowiekunaswini from '../kroniki/Oczlowiekunaswini';

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
        <h1 className="text-3xl text-black">Parlińskie opowiesci</h1>
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
            img={wujek}
            onClick={() => openModal("O człowieku na świni", Oczlowiekunaswini)}
          />
          <Card
            name="Lorem ipsum"
            text="Lorem ipsum Lorem ipsum"
            img={wujek}
            onClick={() => openModal("Lorem ipsum", "Treść Lorem ipsum.")}
          />
          <Card
            name="Lorem ipsum"
            text="Lorem ipsum Lorem ipsum"
            img={wujek}
            onClick={() => openModal("Lorem ipsum", "Treść Lorem ipsum.")}
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
