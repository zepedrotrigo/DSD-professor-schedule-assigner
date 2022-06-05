import Button from '../../Button/Button';
import './ExportContent.css';

const ExportContent = (props) => {

    return (
        <div className='export-content'>
            <Button class="edit-button" text="JSON" />
            <Button class="edit-button" text="CSV" />
            <Button class="edit-button" text="XLS" />
        </div>
    );
}

export default ExportContent;