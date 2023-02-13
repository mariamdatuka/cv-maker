import styled from "styled-components";

export const Container=styled.div`
  display:flex;
  align-items:center;
  justify-content:space-between;
  padding:20px 30px;
  gap:30px;
  position:relative;

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

   &::after{
     content:"";
     position:absolute;
     border-bottom:1px solid grey;
     left:5%;
     right:5%;
     bottom:0;
     top:0;
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
      }
`
export const Wrapper=styled.div`
        display:flex;
        flex-direction:column;
        gap:10px;
`
export const ImgBox=styled.div`
        width:230px;
        height:230px;
        border-radius:50%;
        
        & img{
          width:100%;
          height:100%;
          object-fit:fill;
          border-radius:50%;
        }
`
export const ExperienceBox=styled.div`
   padding:20px 30px;

   & h5{
    color:#F93B1D;
    font-size:18px;
   }

   & p{
      color:#1A1A1A;
      font-size:16px;
     }
   & span{
    color:grey;
    font-size:14px;
   }
`
export const Education=styled.div`
    padding:20px 30px;
    & h5{
    color:#F93B1D;
    font-size:18px;
   }

   & h6{
      color:#1A1A1A;
      font-size:18px;
   }

   & span{
    color:grey;
    font-size:14px;
   }
`