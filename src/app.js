import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import ResetCSS from './components/shared/reset-css'
import HomePage from './pages/home'
import MyInfoPage from './pages/my-info'
import SearchPage from './pages/search'
import SigninPage from './pages/signin'
import SignupPage from './pages/signup'
import BoxMakerPage from './pages/box-maker'
import ErrorPage from './pages/error'

import { UserContextProvider } from './contexts/user-contexts'
import AuthRoute from './components/auth-route'

function App() {
  return (
    <>
      <ResetCSS />
      <UserContextProvider>
        <BrowserRouter>
          <Switch>
            <AuthRoute exact path="/" component={HomePage} />
            <AuthRoute auth path="/myinfo" component={MyInfoPage} />
            <AuthRoute path="/signin" component={SigninPage} />
            <AuthRoute path="/signup" component={SignupPage} />
            <AuthRoute path="/search" component={SearchPage} />
            <AuthRoute path="/boxmaker" component={BoxMakerPage} />
            <AuthRoute component={ErrorPage} />
          </Switch>
        </BrowserRouter>
      </UserContextProvider>
    </>
  )
}

export default App
