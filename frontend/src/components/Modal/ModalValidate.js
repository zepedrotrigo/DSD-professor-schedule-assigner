import "./ModalValidate.css";
import React, { useState } from 'react';

function ModalValidate(props) {

    function hideModal(){
        props.changeModal();
    }

    function loadWarnings(){
        let result = [];
        Array.from(props.warnings.warnings.entries()).map((entry) => {
            const [k, v] = entry
            console.log(v);
            if (isNaN(v.total_hours)){
                result.push(<li>Aula não atribuída: {v.prof_acronym} - {v.total_hours}</li>)
            }
            else if(v.total_hours==null){
                result.push(<li>Professor a não ser utilizado: {v.prof_acronym} - {v.total_hours} hours</li>);
            }
            else{
                result.push(<li>Professor sobrecarregado: {v.prof_acronym} - {v.total_hours} hours</li>);
            }
        })
        return(<>{result}</>);
    }

    return (
        <>  
            <div className="backdrop"></div>
            <div className="validate-modal">
                <div>
                    <h2>Avisos:</h2>
                </div>
                <div className="validate-modal-content">
                    <ul>
                        {loadWarnings()}
                    </ul>
                </div>
                <div className="validate-modal-buttons">
                    <button className="back-button" onClick={hideModal}>Voltar</button>
                </div>
            </div>
        </>
    )
}

export default ModalValidate;