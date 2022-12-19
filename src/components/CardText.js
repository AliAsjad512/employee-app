import React from 'react';

const CardText = ({ category, value }) => {
    return (
        <div className='content-wrapper'>
            <h4 className='category'>{category} :</h4>
            <h4 className='value'> {value}</h4>
        </div>
    );
}

export default CardText;