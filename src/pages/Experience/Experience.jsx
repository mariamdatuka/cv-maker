import React, {useEffect}from 'react'
import {GridContainer,GridItem,GridItemTwo } from './Styles'
import Header from '../../components/Header/Header';
import Input from '../../components/Input/Input';
import { useFormik } from "formik";
import * as yup from 'yup';
import Button from '../../components/Button/Button';

const Experience = () => {

  const initialValues={
    experiences:[
      {
        position:localStorage.getItem('position') || '',
        employer:localStorage.getItem('employer') || '',
        start_date:localStorage.getItem('start_date') || '',
        due_date:localStorage.getItem('due_date') || '',
        description:localStorage.getItem('description') || '',
      }
    ]
  }
   
    const validationSchema=yup.object({
        position:yup
          .string()
          .min(2)
          .required(),
        employer: yup
          .string()
          .min(2)
          .required()
      })

      const formik=useFormik({
        initialValues,
        validationSchema,
        onSubmit:(values)=>{
          console.log(values);
        },
      })

      useEffect(() => {
        localStorage.setItem('position', formik.values.experiences.position);
        localStorage.setItem('employer', formik.values.experiences.employer);
        localStorage.setItem('start_date', formik.values.experiences.start_date);
        localStorage.setItem('end_date', formik.values.experiences.end_date);
        localStorage.setItem('description', formik.values.experiences.description);
        }, [formik.values]);

  return (
    <>
    <GridContainer>
        <GridItem>
           <Header title={'გამოცდილება'} currentPage={2}/>
           <form onSubmit={formik.handleSubmit}>
            {formik.values.experiences.map((item,index)=>(
            <div key='index'>    
              <Input 
                id='position'
                label='თანამდებობა'
                helper='მინიმუმ 2 სიმბოლო'
                type='text'
                placeholder='თანამდებობა'
                value={item.position}
                onChange={formik.handleChange}
                error={Boolean(formik.errors.item.position && formik.touched.item.position)}
                touched={Boolean(formik.touched.item.position)}
                inlineStyle={{width:'770px', height:'50px'}}
                />
              <Input 
                id='employer'
                label='დამსაქმებელი'
                type='text'
                helper='მინიმუმ 2 სიმბოლო'
                value={item.employer}
                onChange={formik.handleChange}
                placeholder='დამსაქმებელი'
                error={Boolean(formik.errors.item.employer && formik.touched.item.employer)}
                touched={Boolean(formik.touched.item.employer)}
                inlineStyle={{width:'770px', height:'50px'}}/>
              <Input 
                id='start_date'
                label='დაწყების რიცხვი'
                type='date'
                value={item.start_date}
                onChange={formik.handleChange}
                error={Boolean(formik.errors.item.start_date && formik.touched.item.start_date)}
                touched={Boolean(formik.touched.item.start_date)}/>  
              <Input 
                id='due_date'
                label='დამთავრების რიცხვი'
                type='date'
                value={item.due_date}
                onChange={formik.handleChange}
                error={Boolean(formik.errors.item.due_date && formik.touched.item.due_date)}
                touched={Boolean(formik.touched.item.due_date)}/>
             </div>
            ))}
             
                <Button name='შემდეგი'type='submit'/>
                </form>
        </GridItem>
        <GridItemTwo>
           
        </GridItemTwo>
    </GridContainer>
    </>
  )
}

export default Experience