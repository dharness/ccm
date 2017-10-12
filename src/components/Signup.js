import React, { Component } from 'react'
import { WonderForm, WonderField } from 'wonder-form'
import styles from './../styles/Signup.css'
import { observer, inject } from 'mobx-react'
import autobind from 'autobind-decorator'

@inject('auth')
@observer class Signup extends Component {

  constructor() {
    super();
    this.state = {
      signupOrLogin: 'login',
      formError: null,
      fieldErrors: false
    }
  }

  @autobind
  async submitForm(formContents) {
    const userInfo = {
      username: formContents.username.value,
      password: formContents.password.value
    }
    const authenticate = this.state.signupOrLogin === 'signup' ? this.props.auth.signup : this.props.auth.login
    try {
      await authenticate(userInfo);
      this.props.history.push('home')
    } catch(error) {
      if (error.message === '409') {
        this.setState({formError: 'User already exists!'})
      } else if (error.message === '401') {
        this.setState({formError: 'Unauthorized user'})
      }
    }
  }

  @autobind
  handleError(errors) {
    this.setState({fieldErrors: true})
  }

  handleClick = buttonName => () => {
    if (this.state.signupOrLogin !== buttonName) {
      this.setState({ 
        signupOrLogin: buttonName,
        formError: null
      })
    }
  }

  getAuthButtonStyles() {
    let signupClassName = styles.authButton
    let loginClassName = styles.authButton

    if (this.state.signupOrLogin === 'signup') {
      signupClassName = styles.selectedAuthButton
    } else {
      loginClassName = styles.selectedAuthButton
    }

    return {loginClassName, signupClassName}
  }

  render () {
    const fieldClassName = this.state.fieldErrors || this.state.formError ? styles.errorFormField : styles.formField
    const {loginClassName, signupClassName} = this.getAuthButtonStyles()
    return (
      <div className={styles.wrapper}>
        <div className={styles.buttonsWrapper}>
          <button className={loginClassName} onClick={this.handleClick('login')}>Log In</button>
          <button className={signupClassName} onClick={this.handleClick('signup')}>Sign Up</button>
        </div>
        <WonderForm onSuccess={this.submitForm} onError={this.handleError}>
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