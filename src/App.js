import GlobalStyle from './GlobalStyles'
import { createBrowserRouter,
  Route, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import Home from './pages/Home/Home'
import BasicInfo from './pages/BasicInfo/BasicInfo'
import Experience from './pages/Experience/Experience';

const router=createBrowserRouter(
  createRoutesFromElements(
     <>
      <Route index element={<Home/>}/>
      <Route path='/basicinfo' element={<BasicInfo/>}/>
      <Route path='/experience' element={<Experience/>}/>
     </>

  )
)

function App() {
  return (
    <> 
     <RouterProvider router={router}/>
     <GlobalStyle/>
    </>
  );
}

export default App;
