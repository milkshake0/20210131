import React from 'react'
import { useHistory } from 'react-router-dom'

import { useUserContext } from '../contexts/user-contexts'

function MyInfoPage() {
  const { setUser } = useUserContext()
  const history = useHistory()

  const handleLogout = () => {
    setUser(null)
    history.replace('/')
  }
  return (
    <div>
      내 정보 페이지<button onClick={handleLogout}>로그아웃</button>
    </div>
  )
}

export default MyInfoPage
