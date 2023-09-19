import React from 'react';
import { useParams } from 'react-router-dom';

const Customer = (props) => {
  const { id } = useParams();

  return (
    <>
      <h3>Customer Component ID: {id}</h3>
    </>
  );
};

export default Customer;
