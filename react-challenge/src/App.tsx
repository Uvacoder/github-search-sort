import React, {useState} from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import UserInfo from './pages/UserInfo';
import MostPopular from './pages/MostPopular';
import {userContext} from './Helper/context'

function App() {
  
  const [userData, setUserData] = useState<any>({})
  const userPath = `/${userData.login}`

  return (
    <BrowserRouter>
      <>
        <userContext.Provider value={{userData, setUserData}}>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/most-popular' element={<MostPopular />}/>
            <Route path={userPath} element={<UserInfo />} />
          </Routes>
        </userContext.Provider>
      </>
    </BrowserRouter>
    
  );
}

export default App;
