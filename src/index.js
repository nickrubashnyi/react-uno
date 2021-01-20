import './index.css';
import reportWebVitals from './reportWebVitals';
import state, {subscribe} from "./Redax/state";
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import store from "./Redax/state";

let renderEntireTree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <React.StrictMode>
                <App state={state}
                     addPost={store.addPost.bind(store)}
                     updateNewPostText={store.updateNewPostText.bind(store)}
                     addMessage={store.addMessage.bind(store)}
                     updateNewMessageText={store.updateNewMessageText.bind(store)}/>
            </React.StrictMode>,
        </BrowserRouter>,
        document.getElementById('root'));
}


renderEntireTree(store.getState());


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
store.subscribe(renderEntireTree);

