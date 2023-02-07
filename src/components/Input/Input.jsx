import React from 'react'
import styled from 'styled-components'


const Input = React.forwardRef((props,ref)=> {
    const {label, helper, inlineStyle}=props
  return (
    <>
      <Wrapper>
         <label>{label}</label>
         <InputField {...props} style={inlineStyle} ref={ref}/> 
         <span>{helper}</span>
      </Wrapper>
   </>
)
});

export default Input



 const InputField=styled.input`
    width:370px;
    height:50px;
    padding-left:10px;
`
 const Wrapper=styled.div`
    display:flex;
    flex-direction:column;
    gap:5px;

    & span{
      color:#2E2E2E;
      font-size:12px;
         
    }
`
