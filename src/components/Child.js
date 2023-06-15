import React from 'react';

function Child({show,onClose}){

    return(

        show && <div className='model-overlay'>
        <button className='model-close' onClick={()=>{onClose(false)}}>Close</button>
        <p>This is the content of the modal.</p>
        </div>
    )
}

export default Child;