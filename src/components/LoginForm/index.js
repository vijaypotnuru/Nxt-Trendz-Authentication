import './index.css'

import {Component} from 'react'

class LoginForm extends Component {
  state = {
    username: '',
    password: '',
    message: '',
  }

  onSubmitSuccess = () => {
    const {history} = this.props
    history.replace('/')
  }

  submitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    const response = await fetch(url, options)
    console.log(response)
    if (response.ok === true) {
      this.onSubmitSuccess()
    } else {
      this.setState({message: "* Username and Password didn't match"})
    }
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  renderUsernameField = () => {
    const {username} = this.state
    return (
      <>
        <label htmlFor="username" className="input-label">
          USERNAME
        </label>
        <input
          id="username"
          className="username-input-field"
          type="text"
          value={username}
          placeholder="Username"
          onChange={this.onChangeUsername}
        />
      </>
    )
  }

  renderPasswordField = () => {
    const {password} = this.state

    return (
      <>
        <label htmlFor="password" className="input-label">
          PASSWORD
        </label>
        <input
          id="password"
          className="password-input-field"
          type="password"
          value={password}
          placeholder="Password"
          onChange={this.onChangePassword}
        />
      </>
    )
  }

  render() {
    const {message} = this.state
    return (
      <div className="login-form-container">
        <img
          className="login-website-logo-mobile-image"
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
          alt="website logo"
        />
        <img
          className="login-image"
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
          alt="website login"
        />
        <form className="form-container" onSubmit={this.submitForm}>
          <img
            className="login-website-logo-desktop-image"
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
            alt="website logo"
          />
          <div className="input-container">{this.renderUsernameField()}</div>
          <div className="input-container">{this.renderPasswordField()}</div>
          <button type="submit" className="login-button">
            Login
          </button>
          <p className="error-message">{message}</p>
        </form>
      </div>
    )
  }
}

export default LoginForm
