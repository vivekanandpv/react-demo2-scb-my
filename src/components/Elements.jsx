import React from 'react';

const Elements = (props) => {
  const el = ['Hydrogen', 'Nitrogen', 'Helium', 'Oxygen'];
  const elJsx = el.map((e, i) => <p key={i}>{e}</p>);

  return (
    <>
      <h3>Elements</h3>
      {elJsx}
    </>
  );
};

export default Elements;
