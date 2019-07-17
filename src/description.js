import React from "react";


export default function DescriptionBox(props){

    return (
        <div className="description-box">
            <h1>{props.dateProp}</h1>
            <p>{props.explanationProp}</p>
        </div>
    )
}