import React from 'react';

const FunctionCounter = (props) => {
  const [counter, setCounter] = React.useState(0);

  //  mounting and unmounting phases
  React.useEffect(() => {
    console.log('mounting phase');

    return () => {
      console.log('unmounting phase');
    };
  }, []);

  //  update phase
  React.useEffect(() => {
    console.log('update phase');
  }, [counter]);

  return (
    <>
      <h3>Function Counter: {counter}</h3>
      <button
        className='btn btn-primary'
        onClick={() => setCounter((c) => c + 1)}
      >
        Increment
      </button>
    </>
  );
};

export default FunctionCounter;
