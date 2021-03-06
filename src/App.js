import logo from './logo.svg';
import React from "react";
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {BrowserRouter, Route} from "react-router-dom";

const App = (props) => {


    return (

        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Route path="/profile" render={() =>
                    <Profile
                        profilePage={props.state.profilePage}
                        dispatch={props.dispatch} />}/>
                <Route path="/dialogs" render={() =>
                    <Dialogs store={props.store}/>}/>
                        {/*// dialogsPage={props.state.dialogsPage}*/}
                        {/*// addMessage={props.addMessage}*/}
                        {/*// updateNewMessageText={props.updateNewMessageText}/>}/>*/}
                <Route path="/news" render={() => <News
                        state={props.store.getState().dialogsPage.compone}
                />}/>
                <Route path="/music" render={() => <Music/>}/>
                <Route path="/settings" render={() => <Settings/>}/>
            </div>
        </div>

    );
}

export default App;
