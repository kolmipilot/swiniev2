import Navbar from '../Components/Navbar';
import Cardb from '../Components/Cardb'

const Bohaterowie = () => {

  return (
    <>
    
    <div className="w-full center text-center">
        <Navbar/>
        <h1 className="text-3xl text-black">Bohaterowie</h1>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 center mt-5 mb-5 p-1'>
                <Cardb name="Wujek" text="Starszy człowiek z problem alkoholowym, lubi jeździć na rowerze, jego pasje to informatyka i turystyka."/>
                <Cardb name="Przemek" text="Ojciec głównego bohatera, lubi sobie gulnąć jak kazdy, nie oszczędza pasa."/>
                <Cardb name="Fylyp" text="Główny bohater, dzieli jeden problem  ze wszytkimi mieszkańcami parlina, czyli lubi wypić."/>
                <Cardb name="Agata" text="Matka głównego bohatera, często kożysta z pomocy męża przy posługiwaniu się pasem, postać raczej drugoplanowa"/>
                <Cardb name="Karol" text="Brat głównego bohatera, mały wkurzający bachor."/>
                <Cardb name="Swinia" text="Metafora większośći mieszkańców, często spotykana w kronikach."/>
                <Cardb name="Gruby" text="Postać drugoplanowa, gruby, ulany debil który nienawidzi wsyztskich mieszkańców parlina i chce im zniszczyć życie" className="mb-5"/>
                <Cardb name="Gabrysia" className="mb-5" text="Była, według niektórych wciąż dziwczyna głównego bohatera. Postać drugoplanowa, bierze udział w niektórych ciekawych wątkach."/>
        </div>
    </div>
    </>
  );
};

export default Bohaterowie;
