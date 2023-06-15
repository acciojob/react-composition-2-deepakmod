import React from 'react';

function Child({show,onClose}){

    return(

        show && <div className='modal-overlay'>
        <button className='modal-close' onClick={()=>{onClose(false)}}>Close</button>
        <p className='modal-p'>This is the content of the modal.</p>
        </div>
    )
}

export default Child;