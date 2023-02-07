import { Link } from 'react-router-dom'
import styled from 'styled-components'
import color from '../../assets/color.png'

export const ImgBox=styled.div`
    padding: 20px 50px;
    position:relative;

  &::after{
     content:"";
     position:absolute;
     border-bottom:2px solid grey;
     left:2%;
     right:2%;
     bottom:0;
     top:0;
  }
`
export const AddButton=styled(Link)`
      width:400px;
      height:60px;
      text-decoration:none;
      display:flex;
      align-items:center;
      justify-content:center;
      border-radius:8px;
      background-color:#1A1A1A;
      color:#ffffff;
      z-index:10;
      cursor:pointer;
      transition:all 0.3s ease-in-out;
      
      &:hover{
        background-color:transparent;
        color:#1A1A1A;
        border:1px solid #1A1A1A;
      }
      
`
export const Wrapper=styled.div`
      height:100vh;
      display:flex;
      align-items:center;
      justify-content:center;
      position:relative;
`
export const Container=styled.div`
    background:url(${color});
`
