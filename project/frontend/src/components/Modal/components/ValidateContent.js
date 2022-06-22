import Button from '../../Button/Button';
import './ValidateContent.css';

const ValidateContent = (props) => {

    function hideModal(){
        props.changeModal();
    }

    function loadWarnings(){
        let result = [];
        Array.from(props.warnings.warnings.entries()).map((entry) => {
            const [k, v] = entry
            console.log(v);
            if (isNaN(v.total_hours)){
                result.push(<li>Turma não atribuída: {v.prof_acronym} - {v.total_hours}</li>)
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
            <div>
                <h2>Avisos:</h2>
            </div>
            <div className="validate-modal-content">
                <ul>
                    {loadWarnings()}
                </ul>
            </div>
            <div className="validate-modal-buttons">
                <Button class="back-button" onClick={hideModal}  text="Voltar"/>
            </div>
        </>
    );
}

export default ValidateContent;