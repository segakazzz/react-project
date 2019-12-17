import React from 'react'
// import { FirebaseContext } from './Firebase'
import { Link } from 'react-router-dom'
import { withFirebase } from './Firebase'

const SignUp = () => (
  <div>
    <h1>SignUp</h1>
    <SignUpForm />
  </div>
)

const INITIAL_STATE = {
  username: '',
  email: '',
  passwordOne: '',
  passwordTwo: '',
  error: null
}

class SignUpFormBase extends React.Component {
  constructor (props) {
    super(props)
    this.state = { ...INITIAL_STATE }
    console.log(this.state)
  }
  onSubmit = event => {
    event.preventDefault()
    const { email, passwordOne } = this.state
    this.props.firebase
      .doCreateUserWithEmailAndPassword(email, passwordOne)
      .then(authUser => {
        this.setState({ ...INITIAL_STATE })
      })
      .catch(error => {
        this.setState({ error })
      })

  }
  onChange = event => {
    this.setState({ [event.target.name]: event.target.value })
  }

  render () {
    const { username, email, passwordOne, passwordTwo, error } = this.state
    const isInvalid =
      passwordOne !== passwordTwo ||
      passwordOne === '' ||
      email === '' ||
      username === ''
    return (
      <form onSubmit={this.onSubmit}>
        <input
          name='username'
          value={username}
          onChange={this.onChange}
          type='text'
          placeholder='Full Name'
        />
        <input
          name='email'
          value={email}
          onChange={this.onChange}
          type='text'
          placeholder='Email Address'
        />
        <input
          name='passwordOne'
          value={passwordOne}
          onChange={this.onChange}
          type='password'
          placeholder='Password'
        />
        <input
          name='passwordTwo'
          value={passwordTwo}
          onChange={this.onChange}
          type='password'
          placeholder='Confirm Password'
        />
        <button disabled={isInvalid} type='submit'>
          Sign Up
        </button>
        {error && <p>{error.message}</p>}
      </form>
    )
  }
}

const SignUpForm = withFirebase(SignUpFormBase)

const SignUpLink = () => (
  <p>
    Don't have an account? <Link to={"/signup"}>Sign Up</Link>
  </p>
);


export default SignUp
export { SignUpForm, SignUpLink }