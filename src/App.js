import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import IndexPage from "./pages/IndexPage";
import UserProfilePage from "./pages/UserProfilePage";
import TitleComp from "./components/Layout/TitleComp";
import ToolBarComp from "./components/Layout/ToolBar/ToolBarComp";
import {useState} from "react";
import FooterComp from "./components/Layout/Footer/FooterComp";

function App() {

    const [user, setUser] = useState(false)

    return (
        <BrowserRouter>
            <div className="App d-flex flex-column">
                <TitleComp />
                <ToolBarComp userLoggedIn={user}/>
                <Routes>
                    <Route path='/login' element={<LoginPage/>}/>
                    <Route path='/register' element={<RegisterPage/>}/>
                    <Route path='/' element={<IndexPage/>}/>
                    <Route path='/profile/:user_name' element={<UserProfilePage/>}/>
                    <Route path='*' element={<ErrorPage/>}/>
                </Routes>
                <FooterComp />
            </div>
        </BrowserRouter>
    );
}

export default App;
