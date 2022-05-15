import './TeacherContent.css';

function TeacherContent(props) {
    return(
        <>
            <div className='teacher-info'>
                <ul>
                    <li className='teacher-email'>{props.email}</li>
                    <li className='teacher-phone'>{props.phone}</li>
                    <li className='teacher-rank'>Prof. Associado</li>
                    <li className='teacher-situation'>Ativo</li>
                    <li className='teacher-sab'>Sab. 2026</li>
                </ul>
            </div>  
            <div className='teacher-history'>
                <ul>
                    <li>2021: 10h/s</li>
                    <li>2020: 11h/s</li>
                    <li>2019: 9h/s</li>
                </ul>
            </div>

            <div className='teacher-wishlist'>
                <ul>
                    <li><i class="fas fa-thumbs-up"></i></li>
                    <li>
                        <div className='teacher-wishlist-like'>
                            <ul>
                                <li>AED</li>
                                <li>AC1</li>
                                <li>AC2</li>
                                <li>FP</li>
                                <li>SO</li>
                                <li>PDS</li>
                                <li>IA</li>
                                <li>IO</li>
                                <li>TQS</li>
                                <li>MD</li>
                            </ul>
                        </div>
                    </li>
                    <li><i class="fas fa-thumbs-down"></i></li>
                    <li>
                        <div className='teacher-wishlist-unlike'>
                        <ul>
                            <li>BD</li>
                            <li>CBD</li>
                            <li>LSD</li>
                            <li>PI</li>
                            <li>LSD</li>
                            <li>PROE</li>
                            <li>MEC</li>
                            <li>NOD</li>
                            <li>PLS</li>
                            <li>PIF</li>
                        </ul>
                        </div>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default TeacherContent;