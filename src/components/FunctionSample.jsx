import React from 'react';

const FunctionSample = (props) => {
  React.useEffect(() => {
    const welcomeMessage = props.person
      ? `Good morning ${props.person?.firstName} ${props.person?.lastName}!`
      : 'Good morning!';

    alert(welcomeMessage);

    return () => {
      const leavingMessage = props.person
        ? `Good bye ${props.person?.firstName} ${props.person?.lastName}!`
        : 'Good bye!';

      alert(leavingMessage);
    };
  }, []);

  return (
    <>
      <div className='card mb-4'>
        <div className='card-body'>
          <p>
            <span className='fw-bold'>Id</span> {props.person?.id}
          </p>
          <p>
            <span className='fw-bold'>First Name</span>{' '}
            {props.person?.firstName}
          </p>
          <p>
            <span className='fw-bold'>Last Name</span> {props.person?.lastName}
          </p>
          <p>
            <span className='fw-bold'>Email</span> {props.person?.email}
          </p>
          <p>
            <span className='fw-bold'>IP Address</span>{' '}
            {props.person?.ipAddress}
          </p>
        </div>
      </div>
    </>
  );
};

export default FunctionSample;
