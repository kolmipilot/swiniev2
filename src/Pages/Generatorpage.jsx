import Navbar from '../Components/Navbar';
import Generatorcomponent from '../Components/Generatorcomponent';
import Footer from '../Components/Footer';
const Generator = () => {

  return (
    <>
        <div className='h-screen m-0'>
        <Navbar/>
        <Generatorcomponent/>   
        <Footer text="Generator pochodzi z strony https://bebekxdw.ct8.pl"/>
        </div>
    </>
  );
};

export default Generator;
