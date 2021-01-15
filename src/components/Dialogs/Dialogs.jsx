import React from "react";
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {updateNewMessageText} from "../../Redax/state";

const Dialogs = (props) => {


    let dialogsElements = props.dialogsPage.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
    let messagesElements = props.dialogsPage.messages.map(m => <Message message={m.message}/>);

    let newDialogElement = React.createRef()

    let addMessage = () => {
        props.addMessage();
    }

    let onMessageChange = () => {
        let text = newDialogElement.current.value;
        props.updateNewMessageText(text);
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>

            <div className={s.messages}>
                {messagesElements}
            </div>
            <div>
                <textarea onChange={onMessageChange}
                          ref={newDialogElement}
                          value={props.newMessageText}/>
                <button onClick={addMessage}>send</button>
            </div>
        </div>

    )
}

export default Dialogs;
