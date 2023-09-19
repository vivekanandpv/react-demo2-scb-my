import React from 'react';

const StyledCounter = (props) => {
  const [counter, setCounter] = React.useState(0);

  return (
    <>
      <h3>Styled Counter: {counter}</h3>

      {counter % 2 === 0 ? <p>Even number</p> : null}

      <button
        className={'btn ' + (counter % 2 === 0 ? 'btn-primary' : 'btn-warning')}
        onClick={() => setCounter((c) => c + 1)}
      >
        Increment
      </button>
    </>
  );
};

export default StyledCounter;
