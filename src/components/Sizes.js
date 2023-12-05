import React from 'react';

const Sizes = ({ sizes }) => {
    return (
        <div className='size_box'>
            {sizes.map((size, index) => (
                <button key={index} className='size-button'>
                    {size}
                </button>
            ))}
        </div>
    );
};

export default Sizes;