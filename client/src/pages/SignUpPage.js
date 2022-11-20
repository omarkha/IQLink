import React from "react";

const SignUpPage = () => {
  return (
    <div className="sign-up-page">
      <div className="container">
        <form className="sign-up-form">
          <input type="text" placeholder="First name" />
          <input type="text" placeholder="Last name" />
          <input type="text" placeholder="Username" />
          <input type="text" placeholder="Email" />
          <input type="password" placeholder="Enter password" />
          <input type="password" placeholder="Enter password again" />
        </form>
      </div>
    </div>
  );
};

export default SignUpPage;
