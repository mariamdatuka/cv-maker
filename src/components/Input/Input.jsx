import React from 'react'
import styled from 'styled-components'
import check from '../../assets/check.png'
import err from '../../assets/error.png'


const Input = React.forwardRef((props,ref)=> {
    const {label, touched, id, helper, error, value,inlineStyle,onChange}=props
  return (
    <>
    <div style={{display:'flex', alignItems:'center', gap:'10px'}}>
      <Wrapper>
         <label>{label}</label>
         <InputField 
             id={id} 
             style={inlineStyle} 
             ref={ref}
             value={value} 
             onChange={onChange} 
             error={error}
             touched={touched}/> 
         <span>{helper}</span>
      </Wrapper>
         <Error error={error}>
            <img src={err} alt='error'/>
         </Error>
      </div>
   </>
)
});

export default Input

 const InputField=styled.input`
    width:370px;
    height:50px;
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
 const Wrapper=styled.div`
    display:flex;
    flex-direction:column;
    gap:5px;

    & span{
      color:#2E2E2E;
      font-size:12px;
         
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
