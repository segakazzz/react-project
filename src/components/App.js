import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import SignUp from './SignUp'
import Home from './Home'

const App = props => {
  return <Router>
    <Route exact path='/' component={Home} />
      <Route path='/signup' component={SignUp} />
      {/* <Route path={ROUTES.SIGN_IN} component={SignInPage} />
      <Route path={ROUTES.PASSWORD_FORGET} component={PasswordForgetPage} />
      <Route path={ROUTES.HOME} component={HomePage} />
      <Route path={ROUTES.ACCOUNT} component={AccountPage} />
      <Route path={ROUTES.ADMIN} component={AdminPage} /> */}
  </Router>
}

export default App
