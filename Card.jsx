import PropTypes from 'prop-types';
export default function Card(props){
    if(props.email === '')
    {
        return(
            <>

            </>
        )
    }
    return(
        <>
        <div className='card'>
        <p>{props.email}</p>
        <p>{props.password}</p>
        </div>
        </>
    )    
}
Card.propType = {
    email: PropTypes.string,
    password: PropTypes.string,
}
 