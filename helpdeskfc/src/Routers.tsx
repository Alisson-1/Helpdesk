import { Route, Routes } from 'react-router-dom'
import { LoginPage } from './pages/LoginPage/LoginPage'
import { MainPage } from './pages/MainPage/MainPage'

export const Routers = () => {
  return (
        
    <Routes>
      <Route path='/' element={<LoginPage/>}/>
      <Route path='/mainpage' element = {<MainPage/>}/>
    </Routes>
    

  );
}

