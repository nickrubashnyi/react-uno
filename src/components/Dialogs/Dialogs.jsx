import React from "react";
import s from './Dialogs.module.css';


const Dialogs = (props) => {
    return (
        <div className="dialogs">
            <div className="dialogs-items">
                <div className="item">
                    Misha
                </div>
                <div className="item">
                    Grisha
                </div>
                <div className="item">
                    Vova
                </div>
                <div className="item">
                    Lera
                </div>
                <div className="item">
                    Kolya
                </div>
                <div className="item">
                    Valera
                </div>
            </div>
            <div className="messages">

            </div>
        </div>

    )
}

export default Dialogs;