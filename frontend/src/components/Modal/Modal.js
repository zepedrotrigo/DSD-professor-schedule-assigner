import "./Modal.css";
import React, { useState } from 'react';

function Modal(props) {

    const [showModal, setShowModal] = useState(false);

    const setShowModalHandler = () => {
        setShowModal(!showModal);
    };

    return (
        <>  
            <div className="backdrop"></div>
            <div className="modal">
                <div className="modal-header">
                    <h2>Alterar Sigla</h2>
                </div>
                <div className="modal-content">
                    <span className="modal-content-name">Nome:</span>
                    <p className="modal-content-teacher-name">Tomás Oliveira e Silva</p>
                    <span className="modal-content-actual-acronym">Sigla Atual:</span>
                    <p className="modal-content-teacher-actual-acronym">TOS</p>
                    <label htmlFor="new-acronym" className="modal-content-new-acronym">Nova sigla:</label>
                    <input type="text" name="new-acronym" className="new-acronym-input"></input>
                </div>
                <div className="modal-buttons">
                    <button className="cancel-button">Cancelar</button>
                    <button className="edit-button">Alterar</button>
                </div>
            </div>
        </>
    )
}

export default Modal;