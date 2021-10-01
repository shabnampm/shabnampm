import logo from './logo.svg';
import './App.css';
import React from 'react';

class App extends React.Component 
{
  constructor(props)
  {
    super(props);
    
    this.state = 
    {
      username: "",
      dob: "",
      std: "",
      division: "",
      gender: "",
    };
  }

  mySubmitHandler = (event) => {
    event.preventDefault();
    alert("You are submitting " + this.state.username);
  }
  myChangeHandler = (event) => {

    let nam = event.target.name;
    let val = event.target.value;
    if (nam === "username") {
      if (!(A-Z] || [a-z] )(val)) {
        alert("Not allowed");
      }
    }
    this.setState({[nam]: val});
  }
  
  render()
  {
    return (
      <form onSubmit={this.mySubmitHandler}>
      <h1>Student Details</h1>
      <p>Name:</p>
      <input
        type='text'
        name="username"
      />

      <p>Date Of Birth:</p>
      <input
        type='text'
        name="dob"
      />
         <p>Class:</p>
        <select value={this.state.std} name="std">
        <option value="first">I</option>
        <option value="second">II</option>
        <option value="third">III</option>
        <option value="fourth">IV</option>
        <option value="fourth">V</option>
        </select>

      <p>Division:</p>
        <select value={this.state.division} name="division">
        <option value="aa">A</option>
        <option value="bb">B</option>
        <option value="cc">C</option>
        
      </select>

      

        <div onChange={this.onChangeValue}>
        <input type="radio" value="Male" name="gender" /> Male
        <input type="radio" value="Female" name="gender" /> Female
      
      </div>

      
      <input
        type='submit'
      />
      </form>
    
            );
  }
}

export default App;
