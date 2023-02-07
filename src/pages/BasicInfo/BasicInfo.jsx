import React, {useRef, useState, useEffect} from 'react'
import Button from '../../components/Button/Button'
import Header from '../../components/Header/Header'
import Input from '../../components/Input/Input'
import {GridContainer,GridItem,GridItemTwo, Upload } from './Styles'
import { useFormik } from "formik";
import * as yup from 'yup';


const BasicInfo = (props) => {
  /*const [file, setFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  */

  const hiddenFileInput=useRef(null);

  /*useEffect(() => {
    return () => {
      if (previewUrl) {
        URL.revokeObjectURL(previewUrl);
      }
    };
  }, [previewUrl]);
*/
  const handleClick=e=>{
    hiddenFileInput.current.click();
  }

  const handleChange =e=> {
    const file=(e.target.files[0]);
     /*setPreviewUrl(URL.createObjectURL(file));*/
  };

  const onFinish=(values)=>{
    console.log(values);
    
  }

  const validationSchema=yup.object({
    name:yup
      .string('სახელი')
      .required('აუცილებელია'),
    lastName: yup
      .string("შეიყვანეთ თქვენი გვარი!")
      .required("ეს ველი აუცილებელია!"),
    email: yup
      .string("შეიყვანეთ თქვენი მეილი!")
      .required("ეს ველი აუცილებელია!"),
  })

  const formik=useFormik({
    initialValues:{
      name:'',
      surname:'',
      image:'',
      about_me:'',
      email:'',
      phone_number:'',
    },
    validationSchema,
    onSubmit:(values)=>onFinish(values),
  })



  return (
    <> 
      <GridContainer>
         <GridItem>
           <Header title={'პირადი ინფო'} currentPage={1}/>
           <form style={{paddingTop:'100px'}} onSubmit={handleSubmit}>
            <div style={{display:'flex', gap:'30px'}}>
              <Input 
                id='name'
                label='სახელი'
                helper='მინიმუმ 2 ასო,ქართული ასოები'
                type='text'
                placeholder='ანზორ'
                value={formik.values.name}
                onChange={formik.handleChange}
                error={formik.touched["name"] && Boolean(formik.errors["name"])}
                helperText={formik.touched["name"] && formik.errors["name"]}
                />
              <Input 
                label='გვარი'
                type='text'
                helper='მინიმუმ 2 ასო,ქართული ასოები'
                value={formik.values.surname}
                onChange={formik.handleChange}
                placeholder='მუმლაძე'/>
              </div>
              <div style={{paddingTop:'70px', display:'flex', gap:'10px'}}>
              <span>პირადი ფოტოს ატვირთვა</span>
              <Upload onClick={handleClick}>
                 ატვირთვა
              </Upload>
              <Input
                type='file'
                value={formik.values.image}
                onChange={formik.handleChange}
                inlineStyle={{display:'none'}}
                ref={hiddenFileInput}
                />
                </div>
            <div style={{display:'flex', flexDirection:'column', gap:'40px', paddingTop:'50px'}}>
              <Input 
                label='ჩემ შესახებ(არასავალდებულო)'
                type='text'
                value={formik.values.about_me}
                onChange={formik.handleChange}
                placeholder='ზოგადი ინფო ჩემს შესახებ'
                inlineStyle={{width:'770px', height:'105px'}}/>
              <Input 
                label='ელ ფოსტა'
                type='email'
                value={formik.values.email}
                onChange={formik.handleChange}
                helper='უნდა მთავრდებოდეს @redberry.ge-ით'
                placeholder='anzorr666@redberry.ge'
                inlineStyle={{width:'770px', height:'50px'}}/>
              <Input 
                label='მობილურის ნომერი'
                type='text'
                value={formik.values.phone_number}
                onChange={formik.handleChange}
                helper='უნდა აკმაყოფილებდეს ქართული მობილურის ნომრის ფორმატს'
                placeholder='+995 555 12 34 56'
                inlineStyle={{width:'770px', height:'50px'}}/>
                <Button type='submit'name='შემდეგი' style={{alignSelf:'end', marginBottom:'50px', marginTop:'100px'}}/>
            </div>
           </form>
          
         </GridItem>
         <GridItemTwo>
            bla
         </GridItemTwo>
      </GridContainer>
     
    </>
  )
}

export default BasicInfo