import {useState} from 'react'
import './styles/main.module.scss'
import {Navigate, Route, Routes} from "react-router-dom";
import AddUser from "./Pages/AddUser.jsx";
import Home from "./Pages/Home.jsx";
import User from "./Pages/User.jsx";
import Header from "./Components/Header.jsx";
import Container from "./Components/Container.jsx";

function App() {

    return (
        <>
            <Header/>
            <Container>
                <Routes>
                    <Route path={'/adduser'} element={<AddUser/>}/>
                    <Route path={'/:id'} element={<User/>}/>
                    <Route path={'/'} element={<Home/>}/>
                </Routes>
            </Container>

        </>

    )
}

export default App
