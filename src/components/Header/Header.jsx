import React from 'react'
import styled from 'styled-components'
import BackButton from '../GoBack/BackButton'


const header = ({title, currentPage}) => {
  return (
    <>
     <Wrapper>
        <h3>{title}</h3>
        <span>{currentPage}/3</span>
     </Wrapper>
     <BackButton/>
    </>
  )
}

export default header

const Wrapper=styled.div`
    padding:30px 0 10px 0;
    display:flex;
    align-items:center;
    justify-content:space-between;
    position:relative;

    &::after{
     content:"";
     position:absolute;
     border-bottom:2px solid grey;
     left:0;
     right:0;
     bottom:0;
     top:0;
   }
`