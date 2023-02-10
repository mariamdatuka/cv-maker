import React from 'react'
import styled from 'styled-components'
import check from '../../assets/check.png'
import err from '../../assets/error.png'

const Textarea = (props) => {
    const {label, touched, id, helper, error, value,inlineStyle,onChange, rows,cols}=props
  return (
    <>
    <Container>
      <Wrapper>
         <label>{label}</label>
         <Area 
             id={id} 
             style={inlineStyle} 
             value={value} 
             onChange={onChange} 
             error={error}
             touched={touched}
             rows={rows}
             cols={cols}/> 
         <span>{helper}</span>
      </Wrapper>
         <Error error={error}>
            <img src={err} alt='error'/>
         </Error>
    </Container>
    
    </>
  )
}

export default Textarea


const Container=styled.div`
    display:flex;
    align-items:center;
    gap:10px;
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

const Area=styled.textarea`
    width:770px;
    height:105px;
    padding:0 20px 0 10px;
    border: 1px solid 
    ${props =>
      props.error
        ? 'red'
        : props.touched
        ? 'green'
        : 'none'};
   background-repeat:no-repeat;
   background-position:right;
   ${props =>
    props.error
      ? `background-image: url();`
      : props.touched
      ? `background-image: url(${check});`
      :'none'
   }
`

const Error=styled.div`
   display:${props =>
      props.error
        ? 'block'
        : props.touched
        ? 'none'
        : 'none'};
`