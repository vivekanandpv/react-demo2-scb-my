import React from 'react';
import PersonCard from './PersonCard';

const PersonCardList = (props) => {
  return (
    <>
      {props.persons?.map((p) => (
        <PersonCard person={p} key={p.id} />
      ))}
    </>
  );
};

export default PersonCardList;
