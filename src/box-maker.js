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
    // console.log(props)
    return `background-color: ${props.color}`
  }}
`

function BoxMaker() {
  const [color, setColor] = useState('#fff')

  const handleColor = (event) => {
    //onChange가 일어날 때 handleColor 사용
    //제이쿼리랑 똑같이 e.target 사용 가능
    setColor(event.target.value)
  }

  return (
    <div>
      {/* <input
        style={{ width: 100, height: 50, border: '1px solid' }}
        onChange={handleColor}
      /> */}
      <Input onchange={handleColor} />
      {/* <div
        style={{
          width: 300,
          height: 300,
          border: '1px solid',
          backgroundColor: color,
        }}
      >
        Box
      </div> */}
      <Box color={color} />
    </div>
  )
}

export default BoxMaker
