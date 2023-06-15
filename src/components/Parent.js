import React, { useState } from 'react';
import Child from "./Child";

const Parent = () => {
  const [show, setShow] = useState(false);
  return (
    <div className='modal-overlay'>
        <button onClick={() => setShow(true)}>Show Modal</button>
        <Child  show={show} onClose={setShow} />
    </div>
  )
}

export default Parent;