import './App.css';
import store from './store/store'
import {Provider} from "react-redux";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import IndexPage from "./pages/IndexPage";
import UserProfilePage from "./pages/UserProfilePage";
import TitleComp from "./components/Layout/TitleComp";
import ToolBarComp from "./components/Layout/ToolBar/ToolBarComp";
import FooterComp from "./components/Layout/Footer/FooterComp";
import NewDiscussionPage from "./pages/NewDiscussionPage";

function App() {

    return (
        <Provider store={store}>
            <BrowserRouter>
                <div className="App d-flex flex-column">
                    <TitleComp />
                    <ToolBarComp />
                    <Routes>
                        <Route path='/login' element={<LoginPage/>}/>
                        <Route path='/register' element={<RegisterPage/>}/>
                        <Route path='/' element={<IndexPage/>}/>
                        <Route path='/profile' element={<UserProfilePage/>}/>
                        <Route path='/newDiscussion' element={<NewDiscussionPage />}/>
                        <Route path='*' element={<ErrorPage/>}/>
                    </Routes>
                    <FooterComp />
                </div>
            </BrowserRouter>
        </Provider>
    );
}

export default App;
