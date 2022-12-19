import React from 'react';

const Notfound = ({ err, message, clicked }) => {
    return (
        <div className='forbiddenWrapper'>
            <p>&#128512;</p>
            <h1>{err}</h1>
            <h5>{message}</h5>
            <button onClick={clicked}> <i className="fa-solid fa-arrow-left"></i> Go back</button>
        </div>
    );
}

export default Notfound;