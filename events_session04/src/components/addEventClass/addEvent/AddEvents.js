
import React from 'react';

const AddEvents = () => {

    function shoot(e, name) {
        alert(`Hello ${name}`);
    }
  return (
    <div>
      <button onClick={shoot}>Take the shoot </button>
      {/* <button onClick={(e) => shoot(e, "jane")}>Take the shoot </button> */}

    </div>
  )
}

export default AddEvents;
