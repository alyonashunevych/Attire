// Sizes.js

import React from 'react';

function Sizes({ sizes, selectedSize, setSelectedSize }) {
    return (
        <div className='sizes'>
            {sizes.map((size, index) => (
                <button
                    key={index}
                    className={`size-button ${selectedSize === size ? 'selected' : ''}`}
                    onClick={() => setSelectedSize(size)}
                >
                    {size}
                </button>
            ))}
        </div>
    );
}

export default Sizes;
