import React from "react";
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    return (
        <div className={s.dialog + '' + s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}
const Message = (props) => {
    return (
        <div className={s.dialog}>{props.message}</div>
    )
}

const Dialogs = (props) => {

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

    let dialogsElements = dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
    let messagesElements = messages.map(m => <Message message={m.message}/>);

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>

    )
}

export default Dialogs;