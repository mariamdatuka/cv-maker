import React from 'react'

import styled from 'styled-components'

const Button = ({name, style}) => {
  return (
    <>
    <Next style={style}>{name}</Next>
    </>
  )
}

export default Button

const  Next=styled.button`
  border:none;
  color:#ffffff;
  background-color:#6B40E3;
  width:150px;
  height:50px;
  border-radius:5px;
  cursor: pointer;
    
`