import React from 'react'
import mail from '../../assets/mail.png'
import mobile from '../../assets/mobile.png'
import {Container,Box,About,Wrapper, ImgBox, ExperienceBox,Education} from './Styles';

const CV = ({data, experience, education}) => {
  

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
        <ImgBox>
             <img src={data.image} alt='img'/>
        </ImgBox>
     }
   </Container>
   <ExperienceBox>
    {
      Array.isArray(experience)&&
      experience.map((item,index)=>(
         <div key={index} style={{display:'flex', flexDirection:'column', gap:'7px', marginBottom:'20px'}}>
            <h5>გამოცდილება</h5>
           <div style={{display:'flex', alignItems:'center',gap:'5px'}}>
              <p>{item.position}</p>
              <p>{item.employer}</p>
            </div>  
            <span>{item.start_date} {item.due_date}</span>
            <div style={{wordBreak:'break-all', width:'500px'}}>{item.description}</div>
         </div>
      ))
    }
   </ExperienceBox>
   <Education>
      {Array.isArray(education)&&
        education.map((item,index)=>(
         <div key={index} style={{display:'flex', flexDirection:'column', gap:'7px', marginBottom:'20px'}}>
            <h5>განათლება</h5>
            <p>{item.institute}{item.degree}</p>
            <span>{item.due_date}</span>
            <div style={{wordBreak:'break-all', width:'500px'}}>{item.description}</div>
         </div>
      ))
    }
   </Education>
    </>
  )
}

export default CV