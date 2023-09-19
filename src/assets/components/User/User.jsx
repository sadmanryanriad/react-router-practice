import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const User = ({user}) => {
    const {name,id,email} = user;
    const style = {
        border: '2px solid yellow',
        margin: '10px',
        padding: '15px',
        borderRadius: '12px'
        
    }
    return (
        <div style={style} >
            <h2>{name}</h2>
            <p>{email}</p>
            <p>{id}</p>
            <Link className='text-blue-600 font-bold' to={`/users/${id}`}>Show Details</Link>
        </div>
    );
};

User.propTypes = {
    user: PropTypes.object
}

export default User;