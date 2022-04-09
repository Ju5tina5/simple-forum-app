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
import UpdateDiscussionPage from "./pages/UpdateDiscussionPage";
import DiscussionsPage from "./pages/DiscussionsPage";
import FavoritesPage from "./pages/FavoritesPage";
import SingleDiscussionPage from "./pages/SingleDiscussionPage";

function App() {

    if (!localStorage.getItem('favorites')) localStorage.setItem('favorites', JSON.stringify([]));

    return (
        <Provider store={store}>
            <BrowserRouter>
                <div className="App d-flex flex-column">
                    <TitleComp />
                    <ToolBarComp />
                    <Routes>
                        <Route path='/simple-forum-app/login' element={<LoginPage/>}/>
                        <Route path='/simple-forum-app/register' element={<RegisterPage/>}/>
                        <Route path='/simple-forum-app/' element={<IndexPage/>}/>
                        <Route path='/simple-forum-app/profile' element={<UserProfilePage/>}/>
                        <Route path='/simple-forum-app/newDiscussion' element={<NewDiscussionPage />}/>
                        <Route path='/simple-forum-app/updateDiscussion/:token' element={<UpdateDiscussionPage />}/>
                        <Route path='/simple-forum-app/Discussions/:topic' element={<DiscussionsPage />}/>
                        <Route path='/simple-forum-app/SingleDiscussion/:token' element={<SingleDiscussionPage />}/>
                        <Route path='/simple-forum-app/saved' element={<FavoritesPage />}/>
                        <Route path='/simple-forum-app/*' element={<ErrorPage/>}/>
                    </Routes>
                    <FooterComp />
                </div>
            </BrowserRouter>
        </Provider>
    );
}

export default App;
