import React from 'react'
import styled from 'styled-components';
import back from '../../assets/back.png'
import { useNavigate } from 'react-router-dom';

const BackButton = () => {
  
  const navigate=useNavigate();
  const handleClick=()=>{
    navigate('/')
  }
  return (
    <>
     <GoBack onClick={handleClick}>
        <img src={back} alt='back'/>
     </GoBack>
    </>
  )
}

export default BackButton

const GoBack=styled.button`
     border:none;
     background-color:#ffffff;
     border-radius:50%;
     width:30px;
     height:30px;
     cursor:pointer;
     position:absolute;
     left:2%;
     top:5%;
     
     & img{
       width:7px;
     }
`