import React from 'react';

const LoginForm = (props) => {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [rememberMe, setRememberMe] = React.useState(false);

  const [passwordValidationError, setPasswordValidationError] =
    React.useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (passwordValidationError) {
      alert('Invalid form, cannot submit');
      return;
    }

    const formData = {
      username,
      password,
      rememberMe,
    };

    console.log('form submitted', formData);
  };

  const handleInput = (e) => {
    switch (e.target.name) {
      case 'username':
        setUsername((_) => e.target.value);
        break;
      case 'password': {
        const regex = /^[0-9]{8}$/;
        if (regex.test(e.target.value)) {
          setPasswordValidationError((_) => null);
        } else {
          setPasswordValidationError((_) => 'Password should only be numbers');
        }

        setPassword((_) => e.target.value);
        break;
      }
      case 'rememberMe':
        setRememberMe((_) => e.target.checked);
        break;

      default:
        break;
    }
  };

  return (
    <>
      <h4>Please login...</h4>
      <form onSubmit={handleSubmit}>
        <div className='mb-3'>
          <label htmlFor='username' className='form-label'>
            Username
          </label>
          <input
            className='form-control'
            name='username'
            id='username'
            onChange={handleInput}
            value={username}
          />
        </div>
        <div className='mb-3'>
          <label htmlFor='password' className='form-label'>
            Password
          </label>
          <input
            type='password'
            name='password'
            className='form-control'
            id='password'
            onChange={handleInput}
            value={password}
          />
          <div className='form-text text-danger'>{passwordValidationError}</div>
        </div>
        <div className='mb-3 form-check'>
          <input
            type='checkbox'
            className='form-check-input'
            name='rememberMe'
            id='remember'
            onChange={handleInput}
            checked={rememberMe}
          />
          <label className='form-check-label' htmlFor='remember'>
            Remember me
          </label>
        </div>
        <button type='submit' className='btn btn-primary'>
          Submit
        </button>
      </form>
    </>
  );
};

export default LoginForm;
