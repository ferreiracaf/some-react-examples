import React from 'react';

const LoaderSpinning = (props) => {
  return (
    <div className='ui active dimmer'>
      <div className='ui big text loader'>{props.message}</div>
    </div>
  );
};

LoaderSpinning.defaultProps = {
  message: 'Loading...',
};

export default LoaderSpinning;
