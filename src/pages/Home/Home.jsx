import React from 'react'
import logo from '../../assets/logo.png'
import cover from '../../assets/cover.png'
import { ImgBox,Wrapper,Container,AddButton} from './Styles'


const Home = () => {
  return (
    <>
     <Container>
       <ImgBox>
          <img src={logo} alt='logo'/>
       </ImgBox>
       <Wrapper>
          <AddButton to='/basicinfo'>რეზიუმეს დამატება</AddButton>
          <img style={{
             position:'absolute',
             right:'28%',
             top:'43%'
          }}src={cover} alt='cover'/>
       </Wrapper>
     </Container>
     </>
  )
}

export default Home