import React from 'react'
import Form from '../components/signup/form'
import { requestSignup } from '../components/signup/service'

function SignupPage() {
  //회원가입
  const handleSubmit = async (formValues) => {
    // const response = await requestSignup(formValues)
    try {
      if (await requestSignup(formValues)) {
        // console.log('response: ', response)
        alert('회원가입에 성공했습니다')
      } else {
        alert('회원가입에 실패했습니다.')
      }
    } catch (e) {
      alert('일시적으로 오류가 발생했습니다. 잠시 후 다시 시도해주세요.')
    }
  }
  // console.log(formValues)

  return (
    <div>
      <Form onSubmit={handleSubmit} />
    </div>
  )
}

export default SignupPage
