import React from "react";

function Login() {
  function submitHandler(e) {
    e.preventDefault();
    console.log("submitted");
  }
  return (
    <div>
      <form onSubmit={e => submitHandler(e)}>
        <input
          type="text"
          placeholder="Username"
          value={""}
          onClick={e => console.log()}
        />
        <input
          type="text"
          placeholder="Password"
          value={""}
          onClick={e => console.log()}
        />
      </form>
    </div>
  );
}

export default Login;
