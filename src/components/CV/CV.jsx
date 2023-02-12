import React from 'react'
import mail from '../../assets/mail.png'
import mobile from '../../assets/mobile.png'
import {Container,Box,About,Wrapper} from './Styles';

const CV = ({data}) => {


  return (
    <>
     <Container>
       <Wrapper>
         <h1>{data.name} {data.surname}</h1>
     {
        data.email&&
        <Box>
           <img src={mail} alt='mail'/>
           <p>{data.email}</p>
        </Box>
     }
     {
        data.phone_number&&
        <Box>
           <img src={mobile} alt='mail'/>
           <p>{data.phone_number}</p>
        </Box>
     }
     {
        data.about_me&&
        <About>
          <h4>ჩემს შესახებ</h4>
          <div style={{wordBreak:'break-all'}}>{data.about_me}</div>
        </About>
     }
     </Wrapper>
     {
        data.image&&
        <div style={{width:'230px', height:'230px', borderRadius:'50%', border:'1px solid red'}}>
             <img style={{objectFit:'fill', width:'100%', height:'100%', borderRadius:'50%'}}src={data.image} alt='img'/>
        </div>
     }
   </Container>
    </>
  )
}

export default CV