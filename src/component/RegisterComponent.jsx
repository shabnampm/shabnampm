import React, { Component } from 'react'

class RegisterComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            fields: {},
            errors: {},
          };

        this.state = {
            name: "",
            dob: "",
            clas: "",
            divi: "",
            gender: "",


        }
        this.handleSubmit=this.handleSubmit.bind(this)
        
    }
    handleValidation() 
    {
        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;
    
        //Name
        if (!fields["name"])
        {
          formIsValid = false;
          errors["name"] = "Cannot be empty";
        }
    
        if (typeof fields["name"] !== "undefined") 
        {
          if (!fields["name"].match(/^[a-zA-Z]+$/)) 
          {
            formIsValid = false;
            errors["name"] = "Only letters";
          }
        }
        this.setState({ errors: errors });
        return formIsValid;
      }
    namehandler = (event) => {
        this.setState({
            name: event.target.value
        })
    }
    
    dobhandler = (event) => {
        this.setState({
            dob: event.target.value
        })
    }
    clashandler = (event) => {
        this.setState({
            cls: event.target.value
        })
    }

    divhandler = (event) => {
        this.setState({
            cls: event.target.value
        })
    }
    
    genderhandler = (event) => {
        this.setState({
            gender: event.target.value
        })
    }

    handleSubmit = (event) => {
        
        alert(`${this.state.name}  Registered Successfully !!!!`)
        console.log(this.state);
        this.setState({
            name: "",
            dob: "",
            cls: '',
            divi: '',
            gender: "",
        })
     event.preventDefault()
        
    }

        



    render(){
        return(
            <div class="row">
                <div class="col-sm-6">
                    <h1>Student Registration</h1>
                    <form onSubmit={this.handleSubmit}>
                        <div class="form-group">
                            <label>Name :</label>
                            <input type="text" class="form-control" value={this.state.name} onChange={this.namehandler} placeholder="Name..." />
                        </div>
                        <div class="form group">
                            <label>Dob :</label> 
                            <input type="date" class="form-control" value={this.state.dob} onChange={this.dobhandler} placeholder="Date of birth" />
                        </div>
                        <div class="form group">
                            <label>Class :</label> 
                            <select checked={this.state.clas} onChange={this.clashandler} class="form-select">
                                <option value="one">I</option>
                                <option value="two">II</option>
                                <option value="three">III</option>
                                <option value="tfour">IV</option>
                                <option value="five">V</option>
                            </select>
                        </div>
                        <div>
                            <label>Division :</label> 
                            <select checked={this.state.divi}  onChange={this.divhandler} class="form-select">
                                <option value="a">A</option>
                                <option value="b">B</option>
                                <option value="c">C</option>
                            </select>
                        </div>

                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="gender" value="Female" checked={this.state.gender==="Female"} onChange={this.genderhandler}>
                                <label class="form-check-label" for="gender">
                                    Female
                                </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="gender" value="Male" checked={this.state.gender==="Male"} onChange={this.genderhandler}>
                                <label class="form-check-label" for="radio">
                                    Male
                                </label>
                    
                        
                        <div class="form-group>
                            <input type="submit" value="Submit" />
                        </div>
                    </form>
                </div>
            </div>  
        )
    }
}

export default RegisterComponent