import Button from '../../Button/Button';
import './ExportContent.css';

const ExportContent = (props) => {

    function handleCLick(event){
        props.onClick(event.target.value);
    }

    return (
        <div className='export-content'>
            <Button class="edit-button" text="JSON" value="json" onClick={handleCLick} />
            <Button class="edit-button" text="CSV" value="csv" onClick={handleCLick} />
            <Button class="edit-button" text="XLS" value="xls" onClick={handleCLick} />
        </div>
    );
}

export default ExportContent;