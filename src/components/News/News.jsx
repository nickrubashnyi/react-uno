import React from "react";
import s from './News.module.css';


const News = (props) => {
    return (
        <div>
            {props.state.name}
        </div>
    )
}

export default News;