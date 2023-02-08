import React from 'react'
import mail from '../../assets/mail.png'
import mobile from '../../assets/mobile.png'

const CV = (props) => {


  return (
    <>
      <div>
      <h1>{props.values.name}</h1>
      <div>
        <img src={mail} alt='mail'/>
        <p>56565665</p>
      </div>
      <div>
        <img src={mail} alt='mail'/>
        <p>@gmail.com</p>
      </div>
      <div>
        <h4>chems shesaxeb</h4>
        <p>ahhahaha</p>
      </div>
      </div>
    </>
  )
}

export default CV