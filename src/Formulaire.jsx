import React, { useState } from "react";

function Formulaire(props) {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    setUser({ ...user, [e.target.id]: e.target.value });
  };
  const submit = (e) => {
    e.preventDefault();

    console.log("success", user);
    // redirected to path
    props.history.push("/");
  };
  const form = () => (
    <form onSubmit={submit}>
      <div className='form-group'>
        <label htmlFor='Name' className='text-muted'>
          Name
        </label>
        <input
          onChange={handleChange}
          type='text'
          className='form-control'
          id='name'
        />
      </div>
      <div className='form-group'>
        <label htmlFor='email' className='text-muted'>
          email
        </label>
        <input
          onChange={handleChange}
          type='email'
          className='form-control'
          id='email'
        />
      </div>
      <div className='form-group'>
        <label htmlFor='password' className='text-muted'>
          password
        </label>
        <input
          onChange={handleChange}
          type='password'
          className='form-control'
          id='password'
        />
      </div>

      <button type='submit' className='btn btn-outline-warning'>
        Submit
      </button>
    </form>
  );
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-6 mx-auto'>{form()}</div>
      </div>
    </div>
  );
}

export default Formulaire;
