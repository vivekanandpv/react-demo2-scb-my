import React, { Component } from 'react';

class ClassSample extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const message = this.props.person
      ? `Good morning ${this.props.person?.firstName} ${this.props.person?.lastName}!`
      : 'Good morning!';

    alert(message);
  }

  componentWillUnmount() {
    const message = this.props.person
      ? `Good bye ${this.props.person?.firstName} ${this.props.person?.lastName}!`
      : 'Good bye!';

    alert(message);
  }

  render() {
    return (
      <>
        <div className='card mb-4'>
          <div className='card-body'>
            <p>
              <span className='fw-bold'>Id</span> {this.props.person?.id}
            </p>
            <p>
              <span className='fw-bold'>First Name</span>{' '}
              {this.props.person?.firstName}
            </p>
            <p>
              <span className='fw-bold'>Last Name</span>{' '}
              {this.props.person?.lastName}
            </p>
            <p>
              <span className='fw-bold'>Email</span> {this.props.person?.email}
            </p>
            <p>
              <span className='fw-bold'>IP Address</span>{' '}
              {this.props.person?.ipAddress}
            </p>
          </div>
        </div>
      </>
    );
  }
}

export default ClassSample;
