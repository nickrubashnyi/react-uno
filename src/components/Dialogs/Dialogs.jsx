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
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name="Misha" id="1"/>
                <DialogItem name="Grisha" id="2"/>
                <DialogItem name="Vova" id="3"/>
                <DialogItem name="Lera" id="4"/>
                <DialogItem name="Kolya" id="5"/>
                <DialogItem name="Valera" id="6"/>

            </div>
            <div className={s.messages}>
                <Message message="Hello"/>
                <Message message="My"/>
                <Message message="Friend"/>
                <Message message="Ya"/>
                <Message message="yok"/>

            </div>
        </div>

    )
}

export default Dialogs;