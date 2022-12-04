import { useEffect, useState } from 'react';

/* import deportistas from './components/deportistas.js'; */

import Buscador from './components/Buscador.jsx';
import CardDeportista from './components/CardDeportista.jsx';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Modal from './components/Modal.jsx';

import "./components/style.css";

function App() {

  const [arrayDeportistas, setArrayDeportistas] = useState([])

  useEffect(() => {
    fetch("http://localhost:3000/deportistas", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((response) => setArrayDeportistas(response))
      .catch((err) => console.error(err));
  }, []);

  const buscar = (nombre) => {
    if (nombre == "") {
      setArrayDeportistas(arrayDeportistas)
    }
    else {
      let deportista = arrayDeportistas.filter((deportista) => {
        return deportista.nombre.toLowerCase().includes(nombre.toLowerCase());
      });
      setArrayDeportistas(deportista)
    }
  }

  const [isOpen, setIsOpen] = useState(false);
  const [deportistaSeleccionado, setDeportistaSeleccionado] = useState({})

  const open = (deportista) => {
    setDeportistaSeleccionado(deportista);
    setIsOpen(!isOpen);
  };

  const close = () => {
    setIsOpen(false);
  }

  return (

    <div className="style">
      <Header />
      <Buscador buscar={buscar} />
      <CardDeportista deportistas={arrayDeportistas} open={open} />
      <Footer />
      {isOpen && <Modal deportista={deportistaSeleccionado} close={close} />}
    </div>
  );
}

export default App;
