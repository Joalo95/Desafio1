import React, { useState } from "react";
import "./styleBuscador.css";

function Buscador(props) {

    const [nombreDeportista, setNombreDeportista] = useState("")

    function getDeportista() {
        props.buscar(nombreDeportista);
    }

    const nombreIngresado = (e) => {
        setNombreDeportista(e.target.value)
    }

    return (

        <>
            <main className="containerSearch">
                <div className="navSearch">
                    <input className="inputSearch" type="search" placeholder="Buscar..." onChange={nombreIngresado}></input>
                    <button className="buttonSearch" onClick={getDeportista}>BUSCAR</button>
                </div>
            </main>
        </>
    );
}
export default Buscador;