import React, { useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { useUserContext } from '../../contexts/user-contexts'

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
  })
  const { email, password } = user

  const handleFormValues = ({ target: { name, value } }) => {
    setUser({
      ...user,
      [name]: value,
    })
  }

  //로그인 시 값 넘겨주기
  const handleSubmit = () => {
    onSubmit(user)
  }

  const isSubmittable = email && password

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
      <Button
        disabled={!isSubmittable}
        onClick={isSubmittable ? handleSubmit : () => {}}
      >
        로그인
      </Button>

      <Link to="/signup">
        <Button>회원가입</Button>
      </Link>
    </Container>
  )
}

export default Form
