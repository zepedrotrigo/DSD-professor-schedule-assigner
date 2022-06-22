import Button from '../../Button/Button';
import './ChangeAcronymContent.css';

const ChangeAcronymContent = (props) => {

    function hideModal(){
        props.changeModal();
    }

    function submitAcronym(){
        let prof_acronym = document.getElementById("new-acronym").value;
        fetch('http://localhost:8000/v1/professors/?prof_id='+ props.id +'&acronym="'+ prof_acronym +'"', {
            method: 'PUT',
        })
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(err => console.log(err));
        props.acronymChanged(prof_acronym, props.acronym);
    }

    return (
        <>  
            <div className="modal-header">
                <h2>Alterar Sigla</h2>
            </div>
            <div className="modal-content">
                <span className="modal-content-name">Nome:</span>
                <p className="modal-content-teacher-name">{props.name}</p>
                <span className="modal-content-actual-acronym">Sigla Atual:</span>
                <p className="modal-content-teacher-actual-acronym">{props.acronym}</p>
                <label htmlFor="new-acronym" className="modal-content-new-acronym">Nova sigla:</label>
                <input id="new-acronym" type="text" name="new-acronym" className="new-acronym-input"></input>
            </div>
            <div className="modal-buttons">
                <Button class="cancel-button" text="Cancelar" onClick={hideModal} />
                <Button class="edit-button" text="Alterar" onClick={submitAcronym}/>
            </div>
        </>
    );
}

export default ChangeAcronymContent;