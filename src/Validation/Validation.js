import React from 'react';

const validationcomponent = ( props ) => {
  if (props.length < 5) {
    return (
      <div className = "tooshort">
        <p>tooshort</p>
      </div>
    )
  }
  else {
    return (
      <div className = "toolong">
        <p>toolong</p>
      </div>
    )
  }
}

export default validationcomponent;
