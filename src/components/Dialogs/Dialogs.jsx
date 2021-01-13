import React from "react";
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {


    let dialogsElements = props.state.dialogsPage.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
    let messagesElements = props.state.dialogsPage.messages.map(m => <Message message={m.message}/>);

    let newDialogElement = React.createRef()

    let addMessage = () => {
        let text = newDialogElement.current.value;
        alert(text);
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div>
                <textarea ref={newDialogElement}></textarea>
                <button onClick={addMessage}>send</button>
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>

    )
}

export default Dialogs;
