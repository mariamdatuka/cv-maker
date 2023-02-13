import React,{useState,useEffect} from 'react'
import styled from 'styled-components';
import Header from '../../components/Header/Header';
import { GridContainer, GridItem, GridItemTwo, InfoBox } from './Styles';
import Input from '../../components/Input/Input';
import Area from '../../components/Textarea/Textarea';
import { useFormik } from "formik";
import * as yup from 'yup';
import Button from '../../components/Button/Button';
import CV from '../../components/CV/CV';
import axios from 'axios';


const Education = ({data, experience, education, setEducation}) => {
  const [options, setOptions] = useState([]);
  const [numEducation, setNumEducation] = useState(1);

  const addEducation = () => {
    setNumEducation((prevState) => prevState + 1);
    formik.values.educations.push({
      institute: "",
      degree_id:'',
      due_date: "",
      description: "",
    });
  };

  useEffect(() => {
    const fetchValues = async () => {
      const response = await axios.get("https://resume.redberryinternship.ge/api/degrees");
      setOptions(response.data);
    };
    fetchValues();
  }, []);

  const pageOneFormData = JSON.parse(localStorage.getItem('infoData'));
  const pageTwoFormData = {experiences:JSON.parse(localStorage.getItem('experiences'))};
  const pageThreeFormData = {educations:JSON.parse(localStorage.getItem('education'))};
  
  const validationSchema = yup.object().shape({
    educations: yup.array().of(
     yup.object().shape({
       institute:yup
       .string()
       .min(2)
       .required(),
     degree_id: yup
       .number()
       .required(),
     description:yup
       .string()
       .required(),
     due_date:yup
        .string()
        .required()
       }),
     ),
    });

  
  const submitForm=async()=>{
    try{
      const formData = new FormData();
      formData.append('name', pageOneFormData.name);
      formData.append('surname', pageOneFormData.surname);
      formData.append('email', pageOneFormData.email);
      formData.append('phone_number', pageOneFormData.phone_number);

      pageTwoFormData.experiences.forEach((item, index) => {
        formData.append(`experiences[${index}][position]`, item.position);
        formData.append(`experiences[${index}][employer]`, item.employer);
        formData.append(`experiences[${index}][start_date]`, item.start_date);
        formData.append(`experiences[${index}][due_date]`, item.due_date);
        formData.append(`experiences[${index}][description]`, item.description);
      });

      pageThreeFormData.educations.forEach((item, index) => {
        formData.append(`educations[${index}][institute]`, item.institute);
        formData.append(`educations[${index}][degree_id]`, item.degree_id);
        formData.append(`educations[${index}][due_date]`, item.due_date);
        formData.append(`educations[${index}][description]`, item.description);
      });
      const blobRes=await fetch(pageOneFormData.image);
      const blob=await blobRes.blob();
      formData.append('image', blob);
      formData.append('about_me', pageOneFormData.about_me);

      const response = await axios.post('https://resume.redberryinternship.ge/api/cvs',formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });
      console.log(response.status);
    }
    catch (error){
      console.log(error);
    }
  }


    const formik=useFormik({
      initialValues:education,
      validationSchema,
      onSubmit:(values)=>{
        submitForm();
      },
    })

  
    useEffect(() => {
      localStorage.setItem('education', JSON.stringify(formik.values.educations));
      setEducation(formik.values.educations);
    }, [formik.values.educations]);

  return (
    <>
    <GridContainer>
      <GridItem>
        <Header title={'განათლება'} currentPage={3}/>
        <form onSubmit={formik.handleSubmit}>
            {formik.values.educations.map((item,index)=>(
            <InfoBox key={index}>
            <div style={{display:'flex', flexDirection:'column', gap:'30px', paddingTop:'80px', paddingBottom:'50px'}}>   
             <Input 
                name={`educations.${index}.institute`}
                label='სასწავლებელი'
                helper='მინიმუმ 2 სიმბოლო'
                type='text'
                placeholder='სასწავლებელი'
                value={item.institute}
                onChange={formik.handleChange}
                error={formik.errors.educations && formik.errors.educations[index] && formik.errors.educations[index].institute && formik.touched.educations && formik.touched.educations[index] && formik.touched.educations[index].institute}
                touched={formik.touched.educations && formik.touched.educations[index] && formik.touched.educations[index].institute}
                inlineStyle={{width:'770px', height:'50px'}}
                />
            </div> 
            <div style={{display:'flex', gap:'15px', alignItems:'center', justifyContent:'center', paddingBottom:'50px'}}>
            <select 
               style={{width:'350px', height:'50px'}} 
               name={`educations[${index}].degree_id`}
               value={formik.values.educations[index].degree_id}
               onChange={formik.handleChange}
               >
             <option value="">
               აირჩიეთ ხარისხი
             </option>
             {options.map((option) => (
                <option key={option.id} value={option.id}>
                {option.title}
               </option>
            ))}
         </select>
              
            <Input 
                name={`educations.${index}.due_date`}
                label='დამთავრების რიცხვი'
                type='date'
                value={item.due_date}
                onChange={formik.handleChange}
                error={formik.errors.educations && formik.errors.educations[index] && formik.errors.educations[index].due_date && formik.touched.educations && formik.touched.educations[index] && formik.touched.educations[index].due_date}
                touched={formik.touched.educations && formik.touched.educations[index] && formik.touched.educations[index].due_date}
                inlineStyle={{width:'350px', height:'50px'}}
                />
                </div>
              <Area
                name={`educations.${index}.description`}
                label='აღწერა'
                type='text'
                value={item.description}
                onChange={formik.handleChange}
                rows={3}
                cols={3}
                placeholder='ზოგადი აღწერა'
                error={formik.errors.educations && formik.errors.educations[index] && formik.errors.educations[index].description && formik.touched.educations && formik.touched.educations[index] && formik.touched.educations[index].description}
                touched={formik.touched.educations && formik.touched.educations[index] && formik.touched.educations[index].description}/>
             </InfoBox>
            ))}
                <button style={{width:'290px', height:'48px', backgroundColor:'#62A1EB',borderRadius:'8px',border:'none'}}type='button' onClick={addEducation}>მეტი განათლების დამატება</button>
                <Button name='დასრულება'type='submit' style={{aligSelf:'end', marginBottom:'50px', marginTop:'100px'}}/>
                </form>
      
      </GridItem>
    <GridItemTwo>
        <CV data={data} experience={experience} education={education}/>
    </GridItemTwo>
    </GridContainer>
    </>
  )
}

export default Education


const Select =styled.select`
  
`