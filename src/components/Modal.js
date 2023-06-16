import React, { useState } from 'react';
import Child from './Child';

function Modal(){
    let [show, setShow] = useState(false);

    function displayNone(value){
        setShow(value);
    }

    return  <div className='modal'>

        <button onClick={()=>{displayNone(true)}}>Show Modal</button>
        <Child show={show} displayNone={displayNone} />

    </div>
}

export default Modal;