import React, {useState,useEffect}from 'react'
import {GridContainer,GridItem,GridItemTwo, InfoBox} from './Styles'
import Header from '../../components/Header/Header';
import Input from '../../components/Input/Input';
import Area from '../../components/Textarea/Textarea';
import { useFormik } from "formik";
import * as yup from 'yup';
import Button from '../../components/Button/Button';
import { useNavigate } from 'react-router-dom';
import CV from '../../components/CV/CV';

const Experience = ({data, experience, setExperience}) => {
  const [numOfExperiences, setNumOfExperiences] = useState(1);
  const addExperience = () => {
    setNumOfExperiences((prevState) => prevState + 1);
    formik.values.experiences.push({
      position: "",
      employer: "",
      start_date: "",
      due_date: "",
      description: "",
    });
  };

 const navigate = useNavigate(); 

  const validationSchema = yup.object().shape({
     experiences: yup.array().of(
      yup.object().shape({
        position:yup
        .string()
        .min(2)
        .required(),
      employer: yup
        .string()
        .min(2)
        .required(),
      description:yup
        .string()
        .required(),
      start_date:yup
        .string()
        .required(),
      due_date:yup
         .string()
         .required()
        }),
      ),
     });
  
      const formik=useFormik({
        initialValues:experience,
        validationSchema,
        onSubmit:(values)=>{
          navigate('/education');
        },
      })
      
     useEffect(() => {
        localStorage.setItem('experiences', JSON.stringify(formik.values.experiences));
        setExperience(formik.values.experiences);
      }, [formik.values.experiences]);
     
    
  return (
    <>
    <GridContainer>
        <GridItem>
           <Header title={'გამოცდილება'} currentPage={2}/>
           <form onSubmit={formik.handleSubmit}>
            {formik.values.experiences.map((item,index)=>(
            <InfoBox key={index}>
            <div style={{display:'flex', flexDirection:'column', gap:'30px', paddingTop:'80px', paddingBottom:'50px'}}>   
             <Input 
                name={`experiences.${index}.position`}
                label='თანამდებობა'
                helper='მინიმუმ 2 სიმბოლო'
                type='text'
                placeholder='დეველოპერი, დიზაინერი და ა.შ'
                value={item.position}
                onChange={formik.handleChange}
                error={formik.errors.experiences && formik.errors.experiences[index] && formik.errors.experiences[index].position && formik.touched.experiences && formik.touched.experiences[index] && formik.touched.experiences[index].position}
                touched={formik.touched.experiences && formik.touched.experiences[index] && formik.touched.experiences[index].position}
                inlineStyle={{width:'770px', height:'50px'}}
                />
              <Input 
                name={`experiences.${index}.employer`}
                label='დამსაქმებელი'
                type='text'
                helper='მინიმუმ 2 სიმბოლო'
                value={item.employer}
                onChange={formik.handleChange}
                placeholder='დამსაქმებელი'
                error={formik.errors.experiences && formik.errors.experiences[index] && formik.errors.experiences[index].employer && formik.touched.experiences && formik.touched.experiences[index] && formik.touched.experiences[index].employer}
                touched={formik.touched.experiences && formik.touched.experiences[index] && formik.touched.experiences[index].employer}
                inlineStyle={{width:'770px', height:'50px'}}/>
            </div> 
            <div style={{display:'flex', gap:'15px', paddingBottom:'50px'}}>
              <Input 
                name={`experiences.${index}.start_date`}
                label='დაწყების რიცხვი'
                type='date'
                value={item.start_date}
                onChange={formik.handleChange}
                error={formik.errors.experiences && formik.errors.experiences[index] && formik.errors.experiences[index].start_date && formik.touched.experiences && formik.touched.experiences[index] && formik.touched.experiences[index].start_date}
                touched={formik.touched.experiences && formik.touched.experiences[index] && formik.touched.experiences[index].start_date}/> 
              <Input 
                name={`experiences.${index}.due_date`}
                label='დამთავრების რიცხვი'
                type='date'
                value={item.due_date}
                onChange={formik.handleChange}
                error={formik.errors.experiences && formik.errors.experiences[index] && formik.errors.experiences[index].due_date && formik.touched.experiences && formik.touched.experiences[index] && formik.touched.experiences[index].due_date}
                touched={formik.touched.experiences && formik.touched.experiences[index] && formik.touched.experiences[index].due_date}/>
                </div>
             <Area
                name={`experiences.${index}.description`}
                label='აღწერა'
                type='text'
                value={item.description}
                onChange={formik.handleChange}
                rows={3}
                cols={3}
                placeholder='როლი თანამდებობაზე და ზოგადი აღწერა'
                error={formik.errors.experiences && formik.errors.experiences[index] && formik.errors.experiences[index].description && formik.touched.experiences && formik.touched.experiences[index] && formik.touched.experiences[index].description}
                touched={formik.touched.experiences && formik.touched.experiences[index] && formik.touched.experiences[index].description}/>
             </InfoBox>
            ))}
                 <button style={{width:'290px', height:'48px', backgroundColor:'#62A1EB',borderRadius:'8px', border:'none'}}type='button' onClick={addExperience}>მეტი გამოცდილების დამატება</button>
                <Button name='შემდეგი'type='submit' style={{aligSelf:'end', marginBottom:'50px', marginTop:'100px'}}/>
                </form>
        </GridItem>
        <GridItemTwo>
          <CV data={data} experience={experience}/>
        </GridItemTwo>
    </GridContainer>
    </>
  )
}

export default Experience