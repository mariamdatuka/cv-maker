import React, { useState,useEffect } from 'react';
import GlobalStyle from './GlobalStyles'
import { createBrowserRouter,
  Route, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import Home from './pages/Home/Home'
import BasicInfo from './pages/BasicInfo/BasicInfo'
import Experience from './pages/Experience/Experience';
import Education from './pages/Education/Education'

const initialValues={
  name: '',
  surname: '',
  image: '',
  about_me:'',
  email:'',
  phone_number:'',
}

const experienceValues={
  experiences:[
    {
      position:'',
      employer:'',
      start_date:'',
      due_date:'',
      description:'',
    }
  ]
}

const educationValues={
  educations:[
    {
      institute:'',
      degree_id:'',
      due_date:'',
      description:'',
    }
  ]
}

function App() {

  const [data, setData]=useState(()=>{
    const savedData = localStorage.getItem("infoData");
    return savedData ? JSON.parse(savedData) : initialValues;
   }
   );

   const [experience,setExperience]=useState(()=>{
    const savedExperience = localStorage.getItem("experiences");
    return savedExperience ?  {experiences: JSON.parse(savedExperience)} : experienceValues;
   }
   );
   
   const [education,setEducation]=useState(()=>{
    const savedEducation = localStorage.getItem("education");
    return savedEducation ?  {education: JSON.parse(savedEducation)} : educationValues;
   }
   );

  const router=createBrowserRouter(
    createRoutesFromElements(
       <>
        <Route index element={<Home/>}/>
        <Route path='/basicinfo' element={<BasicInfo data={data} setData={setData}/>}/>
        <Route path='/experience' element={<Experience experience={experience} setExperience={setExperience} data={data}/>}/>
        <Route path='/education' element={<Education education={education} setEducation={setEducation} experience={experience} data={data}/>}/>
       </>
    )
  )

  return (
    
    <> 
      <RouterProvider router={router}/>
      <GlobalStyle/>
    </>
  );
}

export default App;
