import React from 'react';

const charcomponent = ( props ) => {
  const style = {
    padding: '5px',
    border: '2px solid green',
    display: 'inline-block',
  };

  return (
    <div style = {style}>
      {props.character}
    </div>
  );

};

export default charcomponent;
