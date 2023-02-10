import React from 'react'
import mail from '../../assets/mail.png'
import mobile from '../../assets/mobile.png'
import {Container,Box,About,Wrapper} from './Styles';

const CV = ({values}) => {


  return (
    <>
     <Container>
       <Wrapper>
         <h1>{values.name} {values.surname}</h1>
     {
        values.email&&
        <Box>
           <img src={mail} alt='mail'/>
           <p>{values.email}</p>
        </Box>
     }
     {
        values.phone_number&&
        <Box>
           <img src={mobile} alt='mail'/>
           <p>{values.phone_number}</p>
        </Box>
     }
     {
        values.about_me&&
        <About>
          <h4>ჩემს შესახებ</h4>
          <div>{values.about_me}</div>
        </About>
     }
     </Wrapper>
     {
        values.image&&
        <div style={{width:'230px', height:'230px', borderRadius:'50%', border:'1px solid red'}}>
             
        </div>
     }
   </Container>
    </>
  )
}

export default CV