import './TeacherContent.css';

function TeacherContent(props) {

    function loadLikes(){
        let result=[];
        for(let i=0; i<props.wishLikes.length; i++){
            result.push(<li>{props.wishLikes[i]}</li>);
        }

        return (<>{result}</>)
    }

    function loadDislikes(){
        let result=[];
        for(let i=0; i<props.wishDislikes.length; i++){
            result.push(<li>{props.wishDislikes[i]}</li>);
        }

        return (<>{result}</>)
    }

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
                                {loadLikes()}
                            </ul>
                        </div>
                    </li>
                    <li><i class="fas fa-thumbs-down"></i></li>
                    <li>
                        <div className='teacher-wishlist-unlike'>
                        <ul>
                            {loadDislikes()}
                        </ul>
                        </div>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default TeacherContent;