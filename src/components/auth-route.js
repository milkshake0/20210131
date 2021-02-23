import React from 'react'
import { Route, Redirect } from 'react-router-dom'

import { useUserContext } from '../contexts/user-contexts'

//auth 속성은 Route에서 제공되는 값이 아니라 지정한 값이라서 따로 뺌
function AuthRoute({ auth, ...props }) {
  const { user } = useUserContext()

  if (auth && !user) {
    return <Redirect to="signin" />
  }

  //AuthRote로 감싼 Route
  return <Route {...props} />
}

export default AuthRoute
