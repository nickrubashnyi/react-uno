import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let posts = [
    {id: 1, message: 'Hello, dude', likesCount: 20},
    {id: 2, message: 'It\'s my fist post', likesCount: 35}
]

let dialogs = [
    {id: 1, name: 'Misha'},
    {id: 2, name: 'Grisha'},
    {id: 3, name: 'Vova'},
    {id: 4, name: 'Lera'},
    {id: 5, name: 'Kolya'},
    {id: 6, name: 'Valera'}
]

let messages = [
    {id: 1, message: 'Hello'},
    {id: 2, message: 'My'},
    {id: 3, message: 'Friend'},
    {id: 4, message: 'Ya'},
    {id: 5, message: 'Yok'}
]

ReactDOM.render(
  <React.StrictMode>
    <App posts={posts} dialogs={dialogs} messages={messages} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
