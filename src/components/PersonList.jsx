import React from 'react';

const PersonList = (props) => {
  return (
    <>
      <table className='table table-bordered table-sm'>
        <thead>
          <tr>
            <th>Id</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>IP Address</th>
          </tr>
        </thead>
        <tbody>
          {props.persons?.map((p) => {
            return (
              <tr key={p.id}>
                <td>{p.id}</td>
                <td>{p.firstName}</td>
                <td>{p.lastName}</td>
                <td>{p.email}</td>
                <td>{p.ipAddress}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default PersonList;
