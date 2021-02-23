import React from 'react'
import { useHistory } from 'react-router-dom'

import Form from '../components/signin/form'
import { fetchLogin } from '../components/signin/service'
import { useUserContext } from '../contexts/user-contexts'

function SignInPage() {
  const { setUser } = useUserContext()
  const history = useHistory()

  //form.js에서 formValues 값 받아옴
  const handleSubmit = async (formValues) => {
    const user = await fetchLogin(formValues)

    if (user) {
      setUser(user)
      //로그인 성공 시 main으로 보냄
      history.replace('/')
    } else {
      alert('입력한 정보를 다시 확인해주세요')
    }
  }

  return (
    <div>
      <Form onSubmit={handleSubmit} />
    </div>
  )
}

export default SignInPage
