import "./Modal.css";
import React, { useState } from 'react';

function Modal(props) {

    function hideModal(){
        props.changeModal();
    }

    return (
        <>  
            <div className="backdrop"></div>
            <div className="modal">
                <div className="modal-header">
                    <h2>Alterar Sigla</h2>
                </div>
                <div className="modal-content">
                    <span className="modal-content-name">Nome:</span>
                    <p className="modal-content-teacher-name">{props.name}</p>
                    <span className="modal-content-actual-acronym">Sigla Atual:</span>
                    <p className="modal-content-teacher-actual-acronym">{props.acronym}</p>
                    <label htmlFor="new-acronym" className="modal-content-new-acronym">Nova sigla:</label>
                    <input type="text" name="new-acronym" className="new-acronym-input"></input>
                </div>
                <div className="modal-buttons">
                    <button className="cancel-button" onClick={hideModal}>Cancelar</button>
                    <button className="edit-button" onClick={hideModal}>Alterar</button>
                </div>
            </div>
        </>
    )
}

export default Modal;