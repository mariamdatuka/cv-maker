import React, {useRef, useState, useEffect} from 'react'
import Button from '../../components/Button/Button'
import Header from '../../components/Header/Header'
import Input from '../../components/Input/Input'
import Area from '../../components/Textarea/Textarea'
import {GridContainer,GridItem,GridItemTwo, Upload } from './Styles'
import { useFormik } from "formik";
import * as yup from 'yup';
import CV from '../../components/CV/CV'


const BasicInfo = () => {
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

   /* const handleChange = (event) => {
      formik.handleChange(event);
      setValues(onChange(formik.values));
    };
    */
     /*setPreviewUrl(URL.createObjectURL(file));*/


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
      .matches( /^\+995\s5\d{2}\s\d{2}\s\d{2}\s\d{2}$/),
  })

  const formik=useFormik({
    initialValues:{
      name:localStorage.getItem('name') || '',
      surname:localStorage.getItem('surname') || '',
      image:localStorage.getItem('image') || '',
      about_me:localStorage.getItem('about_me') || '',
      email:localStorage.getItem('email') || '',
      phone_number:localStorage.getItem('phone_number') || ''
    },
    validationSchema,
    onSubmit:(values)=>{
      console.log(values);
    },
  })

  useEffect(() => {
    localStorage.setItem('name', formik.values.name);
    localStorage.setItem('surname', formik.values.surname);
    localStorage.setItem('email', formik.values.email);
    localStorage.setItem('phone_number', formik.values.phone_number);
    localStorage.setItem('about_me', formik.values.about_me);
    localStorage.setItem('image', formik.values.image);
    
  }, [formik.values]);

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
                value={formik.values.image}
                onChange={formik.handleChange}
                inlineStyle={{display:'none'}}
                ref={hiddenFileInput}
                />
                </div>
            <div style={{display:'flex', flexDirection:'column', gap:'40px', paddingTop:'50px'}}>
              <Area
                id='about_me' 
                label='ჩემ შესახებ(არასავალდებულო)'
                type='text'
                value={formik.values.about_me}
                onChange={formik.handleChange}
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
                placeholder='+995 555 12 34 56'
                inlineStyle={{width:'770px', height:'50px'}}
                error={Boolean(formik.errors.phone_number && formik.touched.phone_number)}
                touched={Boolean(formik.touched.phone_number)}/>
                <Button type='submit'name='შემდეგი' style={{alignSelf:'end', marginBottom:'50px', marginTop:'100px'}}/>
            </div>
           </form>
          
         </GridItem>
         <GridItemTwo>
            <CV values={formik.values}/>
         </GridItemTwo>
      </GridContainer>
     
    </>
  )
}

export default BasicInfo