import React, { Component } from 'react'
import { WonderForm, WonderField } from 'wonder-form'
import styles from './Signup.css'
import { observer } from 'mobx-react'

@observer(['account'])
class Signup extends Component {

  constructor() {
    super();
    this.state = {
      signupOrLogin: 'signup',
      formError: '',
      fieldErrors: false
    }
  }

  async submitForm(formContents) {
    const userInfo = {
      username: formContents.username.value,
      password: formContents.password.value
    }
    try {
      await this.props.account.create(userInfo);
      this.props.history.push('home')
    } catch(error) {
      if (error.message === '409') {
        this.setState({formError: 'User already exists!'})
      }
    }
  }

  handleError(errors) {
    this.setState({fieldErrors: true})
  }

  render () {
    const fieldClassName = this.state.fieldErrors ? styles.errorFormField : styles.formField
    
    return (
      <div className={styles.wrapper}>
        <div className={styles.buttonsWrapper}>
          <button className={styles.authButtons}>Sign Up</button>
          <button className={styles.authButtons}>Log In</button>
        </div>
        <WonderForm onSuccess={this.submitForm.bind(this)} onError={this.handleError.bind(this)}>
          <WonderField 
            name='username' 
            type='text' 
            label='Username' 
            required 
            errorMessage={"Enter a valid username"} 
            className={fieldClassName}
          />
          <WonderField 
            name='password' 
            type='password' 
            label='Password' 
            minLength={6} 
            errorMessage={"Password is too short"} 
            className={fieldClassName}
          />          
          <WonderField 
            name='submit' 
            type='submit' 
            text='Sign up' 
            className={styles.formButton}
          />
        </WonderForm>
        <div className={styles.formError}>
          {this.state.formError}
        </div>
      </div>
    )
  }
}

export default Signup