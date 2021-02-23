import React, { useState } from 'react'
import styled from 'styled-components'

const Container = styled.div`
  margin-top: 100px;
  padding: 20px;
`

const Input = styled.input`
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 40px;
  margin: 0 0 8px;
  padding: 5px 39px 5px 11px;
  border: solid 1px #dadada;
  background: #fff;
  box-sizing: border-box;
`

const Button = styled.div`
  font-size: 18px;
  font-weight: 700;
  line-height: 49px;
  display: block;
  width: 100%;
  height: 49px;
  margin: 16px 0 7px;
  cursor: pointer;
  text-align: center;
  color: #fff;
  border: none;
  border-radius: 0;
  background-color: #03c75a;

  ${({ disabled }) =>
    disabled &&
    `
    background-color: #efefef;
  `}
`

function Form({ onSubmit }) {
  const [user, setUser] = useState({
    email: '',
    password: '',
    rePassword: '',
    name: '',
  })

  const handleSubmit = () => {
    //왜 필요한가
    const { email, password, name } = user

    //rePassword는 필요하지 않음
    onSubmit({ email, password, name })
  }

  //input에 변화가 일어나면 감지
  //모든 input이 하나의 함수를 이용하고 있어서 어떤 값인지 구별이 안되므로 name값 활용
  const handleFormValues = ({ target: { name, value } }) => {
    setUser({
      ...user,
      [name]: value,
    })
  }

  //비밀번호 일치여부
  const { email, password, rePassword, name } = user
  const isMatchedPasword = password && rePassword && password === rePassword
  const isSubmittable = email && name && isMatchedPasword //email과 name이 존재하고 isMatched가 true면 회원가입 가능상태

  return (
    <Container>
      <Input
        name="email"
        value={email}
        onChange={handleFormValues}
        placeholder="이메일을 입력해주세요"
      />
      <Input
        name="password"
        type="password"
        value={password}
        onChange={handleFormValues}
        placeholder="비밀번호를 입력해주세요"
      />
      <Input
        name="rePassword"
        type="rePassword"
        value={rePassword}
        onChange={handleFormValues}
        placeholder="비밀번호를 다시 입력해주세요"
      />
      <Input
        name="name"
        value={name}
        onChange={handleFormValues}
        placeholder="이름을 입력해주세요"
      />
      <Button
        disabled={!isSubmittable}
        onClick={isSubmittable ? handleSubmit : () => {}}
      >
        회원가입
      </Button>
    </Container>
  )
}

export default Form
