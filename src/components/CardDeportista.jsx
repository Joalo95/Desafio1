import "./styleCard.css";

function CardDeportista(props) {

    const toggleModal = (deportista) => {
        props.open(deportista);
    };

    return (

        <>
            <div className="containerCards">
                {props.deportistas.map((deportista) => {
                    return (
                        <div className="containerCard">
                            <div className="containerPerson">
                                <div className="namePerson">
                                    <h3>{deportista.nombre}</h3>
                                </div>
                                <div>
                                    <img className="imgPerson" alt="foto" src={deportista.fotoPath || null} />
                                </div>
                                <div className="sportPerson">
                                    <h3> {deportista.especialidad} </h3>
                                </div>
                            </div>
                            <div className="containerButton">
                                <button className="buttonCard" onClick={() => toggleModal(deportista)}>Ver mas</button>
                            </div>
                        </div>
                    );
                })}
            </div>
        </>
    );
}

export default CardDeportista;