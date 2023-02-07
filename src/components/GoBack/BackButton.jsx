import React from 'react'
import { useCallback } from 'react'
import styled from 'styled-components';
import back from '../../assets/back.png'

const BackButton = () => {
    const handleClick=useCallback(()=>{
        window.history.back();
    }, []);

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