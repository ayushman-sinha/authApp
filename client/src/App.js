import React from 'react'
import {BrowserRouter,Route, Routes,Router,Link} from 'react-router-dom';
import Login from './Login';
import SignUp from './SignUp';
import Dashboard from './Dashboard';
const App = () => {
  return (
    <div className=''>
        <BrowserRouter>
            <Routes>
                <Route exact path='/login' element={< Login/>}></Route>
                <Route exact path='/signup' element={< SignUp/>}></Route>
                <Route exact path='/dashboard' element={< Dashboard/>}></Route>
            </Routes>
        </BrowserRouter>
        
    </div>
  )
}

export default App