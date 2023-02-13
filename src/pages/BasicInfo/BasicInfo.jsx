import React, {useRef, useState, useEffect} from 'react'
import Button from '../../components/Button/Button'
import Header from '../../components/Header/Header'
import Input from '../../components/Input/Input'
import Area from '../../components/Textarea/Textarea'
import {GridContainer,GridItem,GridItemTwo, Upload } from './Styles'
import { useFormik } from "formik";
import * as yup from 'yup';
import CV from '../../components/CV/CV'
import { useNavigate } from 'react-router-dom';


const BasicInfo = ({data, setData}) => {
  
  const navigate = useNavigate(); 
  const hiddenFileInput=useRef(null);

  const handleClick=()=>{
    hiddenFileInput.current.click();
  }

  const handleFileChange = (event) => {
    const file = event.currentTarget.files[0];
    const reader = new FileReader();
  
    reader.onload = function() {
      const base64String = reader.result;
      formik.setFieldValue('image', base64String);
    };
  
    reader.readAsDataURL(file);
  };

  const validationSchema=yup.object({
    name:yup
      .string()
      .min(2)
      .required()
      .matches(/^[ა-ჰ]+$/g),
    surname: yup
      .string()
      .min(2)
      .required()
      .matches(/^[ა-ჰ]+$/g),
    email: yup
      .string()
      .required()
      .matches(/^[a-zA-Z0-9.]+@redberry.ge$/),
    phone_number:yup
      .string()
      .required()
      .matches( /^[\+995][0-9]{12}$/im),
    image:yup
      .mixed()
      .required()
  })


  const formik=useFormik({
    initialValues:data,
     validationSchema,
     onSubmit:(values)=>{
      navigate('/experience'); 
    },
  })

  useEffect(()=>{
    localStorage.setItem('infoData', JSON.stringify(formik.values));
    setData(formik.values);
   }, [formik.values])



  return (
    <> 
      <GridContainer>
         <GridItem>
           <Header title={'პირადი ინფო'} currentPage={1}/>
           <form style={{paddingTop:'100px'}} onSubmit={formik.handleSubmit}>
            <div style={{display:'flex', gap:'30px'}}>
              <Input 
                id='name'
                label='სახელი'
                helper='მინიმუმ 2 ასო,ქართული ასოები'
                type='text'
                placeholder='ანზორ'
                value={formik.values.name}
                onChange={formik.handleChange}
                error={Boolean(formik.errors.name && formik.touched.name)}
                touched={Boolean(formik.touched.name)}
                />
              <Input 
                id='surname'
                label='გვარი'
                type='text'
                helper='მინიმუმ 2 ასო,ქართული ასოები'
                value={formik.values.surname}
                onChange={formik.handleChange}
                placeholder='მუმლაძე'
                error={Boolean(formik.errors.surname && formik.touched.surname)}
                touched={Boolean(formik.touched.surname)}/>
              </div>
              <div style={{paddingTop:'70px', display:'flex', gap:'10px'}}>
              <span>პირადი ფოტოს ატვირთვა</span>
              <Upload type='button' onClick={handleClick}>
                 ატვირთვა
              </Upload>
              <Input
                id='image'
                type='file'
                accept='image/*'
                onChange={handleFileChange}
                inlineStyle={{display:'none'}}
                ref={hiddenFileInput}
                error={Boolean(formik.errors.image && formik.touched.image)}
                touched={Boolean(formik.touched.image)}
                />
                </div>
            <div style={{display:'flex', flexDirection:'column', gap:'40px', paddingTop:'50px'}}>
              <Area
                id='about_me' 
                label='ჩემ შესახებ(არასავალდებულო)'
                type='text'
                value={formik.values.about_me}
                onChange={formik.handleChange}
                rows={3}
                cols={3}
                placeholder='ზოგადი ინფო ჩემს შესახებ'
                />
              <Input 
                id='email'
                label='ელ ფოსტა'
                type='email'
                value={formik.values.email}
                onChange={formik.handleChange}
                helper='უნდა მთავრდებოდეს @redberry.ge-ით'
                placeholder='anzorr666@redberry.ge'
                inlineStyle={{width:'770px', height:'50px'}}
                error={Boolean(formik.errors.email && formik.touched.email)}
                touched={Boolean(formik.touched.email)}/>   
              <Input 
                id='phone_number'
                label='მობილურის ნომერი'
                type='text'
                value={formik.values.phone_number}
                onChange={formik.handleChange}
                helper='უნდა აკმაყოფილებდეს ქართული მობილურის ნომრის ფორმატს'
                placeholder='+995555123456'
                inlineStyle={{width:'770px', height:'50px'}}
                error={Boolean(formik.errors.phone_number && formik.touched.phone_number)}
                touched={Boolean(formik.touched.phone_number)}/>
                <Button name='შემდეგი'type='submit'style={{alignSelf:'end', marginBottom:'50px', marginTop:'100px'}}/>
            </div>
           </form>
         </GridItem>
         <GridItemTwo>
            <CV data={data}/>
         </GridItemTwo>
      </GridContainer>
     
    </>
  )
}

export default BasicInfo