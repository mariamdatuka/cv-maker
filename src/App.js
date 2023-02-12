import React, { useState,useEffect } from 'react';
import GlobalStyle from './GlobalStyles'
import { createBrowserRouter,
  Route, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import Home from './pages/Home/Home'
import BasicInfo from './pages/BasicInfo/BasicInfo'
import Experience from './pages/Experience/Experience';
import Education from './pages/Education/Education'


const PropsPasser = ({ children, ...rest }) => {
  return (
    <div>
      {React.Children.map(children, child => {
        return React.cloneElement(child, { ...rest });
      })}
    </div>
  );
};

const router=createBrowserRouter(
  createRoutesFromElements(
     <>
      <Route index element={<Home/>}/>
      <Route path='/basicinfo' element={<BasicInfo/>}/>
      <Route path='/experience' element={<Experience/>}/>
      <Route path='/education' element={<Education/>}/>
     </>

  )
)

/*const initialValues={
  name: '',
  surname: '',
  image: '',
  about_me:'',
  email:'',
  phone_number:'',
}
*/

function App() {
 /* const [data, setData] = useState(()=>{
    const savedData = localStorage.getItem("infoData");
    return savedData ? JSON.parse(savedData) : initialValues;
   }
   );
   useEffect(() => {
    localStorage.setItem("infoData", JSON.stringify(data));
  }, [data]);
  */
  return (
    <> 
    <PropsPasser>
      <RouterProvider router={router}/>
      <GlobalStyle/>
    </PropsPasser>
    </>
  );
}

export default App;
