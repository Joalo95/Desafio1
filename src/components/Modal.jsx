import React from "react";
import "./styleModal.css";


function Modal(props) {

    function closeModal() {
        props.close(false);
    }

    return (

        <div className="modal containerModal">
            <div className="containerBtn"><button className="btnClose" onClick={closeModal}>X</button></div>
            <div className="container1">
                <div className="modalDatos">
                    <div className="container2">
                        <div className="deportistaGeneral">
                            <h3>{props.deportista.nombre}</h3>
                            <h3>{props.deportista.especialidad}</h3>
                        </div>
                        <div className="deportistaDatos">
                            <ul>
                                <li>{props.deportista.edad}</li>
                                <li>{props.deportista.altura}</li>
                                <li>{props.deportista.peso}</li>
                                <li>{props.deportista.nacionalidad}</li>
                                <li>{props.deportista.record}</li>
                            </ul>
                        </div>
                    </div>
                    <div className="deportistaImg">
                        <img src={props.deportista.fotoPath || null} alt="foto" />
                    </div>
                </div>
                <br />
                <div className="modalParrafo">
                    <h3>Descripcion</h3>
                    <p>{props.deportista.descripcion}</p>
                </div>
            </div>
            <div className="modalEstadisticas">
                <h3>Estadisticas</h3>
                <div className="containerEstats">
                    <label>Energia</label>
                    <input type="range" min={0} max={100} className="inputEstadistica" step={1} value={props.deportista.estadisticas.energia}></input>
                    <label>Fuerza</label>
                    <input type="range" min={0} max={100} className="inputEstadistica" step={1} value={props.deportista.estadisticas.fuerza}></input>
                    <label>Resistencia</label>
                    <input type="range" min={0} max={100} className="inputEstadistica" step={1} value={props.deportista.estadisticas.resistencia}></input>
                    <label>Agilidad</label>
                    <input type="range" min={0} max={100} className="inputEstadistica" step={1} value={props.deportista.estadisticas.agilidad}></input>
                    <label>Aguante</label>
                    <input type="range" min={0} max={100} className="inputEstadistica" step={1} value={props.deportista.estadisticas.aguante}></input>
                    <label>Dedicacion</label>
                    <input type="range" min={0} max={100} className="inputEstadistica" step={1} value={props.deportista.estadisticas.dedicacion}></input>
                    <label>Profesionalismo</label>
                    <input type="range" min={0} max={100} className="inputEstadistica" step={1} value={props.deportista.estadisticas.profesionalismo}></input>
                </div>
            </div>
        </div>
    );
}

export default Modal;