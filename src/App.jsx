import React from 'react'
import Login from "./Components/Login"
import LoginPage from './Components/LoginPage'
import LoginUser from './Components/LoginUser'
import LoginUpdate from './Components/LoginUpdate'
import { BrowserRouter, Routes, Route } from 'react-router-dom'



const App = ()=>{
    return(
        <div>
           <BrowserRouter>
           <Login/>
           <Routes>
            <Route element={<LoginPage/>} path="/"/>
            <Route element={<LoginUser/>} path="/users"/>
            <Route element={<LoginUpdate/>} path="/edit/:index"/>
            <Route/>
           </Routes>
           </BrowserRouter>
        </div>
    )
}

export default App