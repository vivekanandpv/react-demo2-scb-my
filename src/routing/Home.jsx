import React from 'react';
import { useHistory } from 'react-router-dom';

const Home = (props) => {
  const history = useHistory();

  const toContact = () => {
    history.push('/contact');
  };

  return (
    <>
      <h1>Home Component</h1>
      <button className='btn btn-primary' onClick={toContact}>
        To Contact
      </button>
    </>
  );
};

export default Home;
