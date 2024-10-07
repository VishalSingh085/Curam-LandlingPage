import React from 'react';
import './CarerBar.css';
const CarerBar = () => {
    const handleClick = () => {
        window.location.href = 'https://www.curamcare.com/carers';
    };

    return (
      
        <div className="carer-bar-wrap mobile-only"  id="carer-top-bar">
        
            <div  className="carer-bar" >
                <p className='font-semibold text-xl'>Are you looking for a care job?</p>
                <div className="carer-bar-btn">
                    <button className='rounded-lg ml-5 mb-20 font-semibold' onClick={handleClick} >
                        Click here
                    </button>
                </div>
            </div>
    
     </div>
    );
};

export default CarerBar;
