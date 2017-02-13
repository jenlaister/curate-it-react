import React, {Component} from 'react'

class UserSignUp extends Component{
  constructor(){
    super()
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(event){
    event.preventDefault()
    const user = {
      first_name: this.refs.first_name.value,
      last_name: this.refs.last_name.value,
      email: this.refs.email.value,
      password: this.refs.userPassword.value,
      password_confirmation: this.refs.passwordConfirmation.value
    }
  }
  
  render(){
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
        <input ref='first_name' placeholder='Enter First Name'/>
        <input ref='last_name' placeholder='Enter Last Name'/>
        <input ref='email' placeholder='Enter Email'/>
        <input type='password' ref='userPassword' placeholder='Enter Password'/>
        <input type='password' ref='passwordConfirmation' placeholder='Verify Password'/>
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

export default UserSignUp
