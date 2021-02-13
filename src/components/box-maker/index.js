import React, { useState } from 'react'
import styled from 'styled-components'

const Input = styled.input`
  width: 100px;
  height: 30px;
  border: 1px solid;
`

const Box = styled.div`
  width: 300px;
  height: 300px;
  border: 1px solid;

  ${(props) => {
    console.log(props)
    return `background-color: ${props.color}`
  }}
`

function BoxMaker() {
  const [color, setColor] = useState('#ddd')

  const handleColor = (e) => {
    setColor(e.target.value)
  }

  return (
    <div>
      <Input onChange={handleColor} />
      <Box color={color} />
    </div>
  )
}

export default BoxMaker
