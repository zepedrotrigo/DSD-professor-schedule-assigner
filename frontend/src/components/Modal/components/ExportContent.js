import Button from '../../Button/Button';
import './ExportContent.css';

const ExportContent = (props) => {

    return (
        <div className='export-content'>
            <Button class="edit-button" text="JSON" onClick={props.onJSONClick} />
            <Button class="edit-button" text="CSV" onClick={props.onCSVClick} />
            <Button class="edit-button" text="XLS" onClick={props.onXLSClick} />
        </div>
    );
}

export default ExportContent;