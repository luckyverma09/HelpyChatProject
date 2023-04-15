import React, { useState } from 'react';

import '../../CSS/Login.css'

function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you can make an API call to check the validity of the username and password
    // If they are valid, set isLoggedIn to true
    setIsLoggedIn(true);
  };

  // if (isLoggedIn) {
  //   return (
  //     <div className="container">
  //       <h1>Welcome {username}!</h1>
  //     </div>
  //   );
  // }

  return (
    <div className="loginbox">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input type="text" value={username} onChange={handleUsernameChange} />
        </label>
        <br />
        <label>
          Password:
          <input type="password" value={password} onChange={handlePasswordChange} />
        </label>
        <br />
        <button type="submit">Log In</button>
      </form>
    </div>
  );
}

export default LoginPage;

