import styled from "styled-components";

export const Container=styled.div`
  display:flex;
  align-items:center;
  justify-content:space-between;
  padding:20px 30px;
  gap:30px;

  & h1{
    color:#F93B1D;
    font-size:30px;
    font-weight:700;
    padding-bottom:15px;
  }
`
export const Box=styled.div`
   display:flex;
   gap:10px;
   align-items:center;

   & p{
    font-size:18px;
   }
`
export const About =styled.div`
    display:flex;
    flex-direction:column;
    gap:10px;

    & h4{
        color: #f93b1d;
        font-size:18px;
    }

    & div{
        font-size:16px;
        width:400px;
        border:1px solid grey;
        
    }
`
export const Wrapper=styled.div`
        display:flex;
        flex-direction:column;
        gap:10px;
`