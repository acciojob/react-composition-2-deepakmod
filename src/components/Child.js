import React from 'react';

function Child({show,onClose}){

    return(

        show && <div className='modal'>
        <button className='modal-close' onClick={()=>{onClose(false)}}>Close</button>
        <p className='p'>This is the content of the modal.</p>
        </div>
    )
}

export default Child;