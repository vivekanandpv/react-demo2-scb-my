import React from 'react';

const PersonCard = (props) => {
  return (
    <>
      <div className='card mb-4'>
        <div className='card-body'>
          <p>
            <span className='fw-bold'>Id</span> {props.person.id}
          </p>
          <p>
            <span className='fw-bold'>First Name</span> {props.person.firstName}
          </p>
          <p>
            <span className='fw-bold'>Last Name</span> {props.person.lastName}
          </p>
          <p>
            <span className='fw-bold'>Email</span> {props.person.email}
          </p>
          <p>
            <span className='fw-bold'>IP Address</span> {props.person.ipAddress}
          </p>
        </div>
      </div>
    </>
  );
};

export default PersonCard;
