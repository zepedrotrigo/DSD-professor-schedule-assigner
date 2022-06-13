import Button from '../../Button/Button';
import './ExportContent.css';

const ExportContent = (props) => {

    function handleCLick(event){
        props.onClick(event.target.value);
    }

    return (
        <div className='export'>
            <h2 className='export-title'>Exportar DSD</h2>
            <hr className='export-break'></hr>
            <p className='export-desc'>É possível exportar a DSD em 3 formatos diferentes.</p>
            <div className='export-content'>
                <Button class="edit-button" text="JSON" value="json" onClick={handleCLick} />
                <Button class="edit-button" text="CSV" value="csv" onClick={handleCLick} />
                <Button class="edit-button" text="XLS" value="xls" onClick={handleCLick} />
            </div>
        </div>
    );
}

export default ExportContent;