import React, {useState} from "react";
import {useDispatch} from "react-redux";

function Login() {
  const [formData, setFormData] = useState({
    username:"",
    password:""
  });  

  const dispatch = useDispatch();

  function handleChange(e){
    const {name , value} = e.target;
    setFormData((prevFormData) =>{
      return({
        ...prevFormData,
        [name]:value
      })
    });
  }

  function submitHandler(e) {
    e.preventDefault();
    //submit to api
    
  }

  //console.log(formData);
  return (
    <div>
      <form onSubmit={e => submitHandler(e)}>
        <input
          type="text"
          placeholder="Username"
          name="username"
          value={formData.username}
          onChange = {handleChange}
        />
        <input
          type="text"
          placeholder="Password"
          name="password"
          value={formData.password}
          onChange = {handleChange}
        />
        <button>Log In</button>
      </form>
    </div>
  );
}

export default Login;
