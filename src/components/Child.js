import React from 'react';

function Child({show,displayNone}){
    return(
        show && <div className='model-overlay' onClick={()=>{displayNone(false)}}  >
            <button className='model-close'  onClick={()=>{displayNone(false)}}>Close</button>
            <p>This is the content of the modal</p>
        </div>
    )
}

export default Child;