import React from "react";


export default function Component(props){

    return (
        <div>
            <h1>{props.titleProp}</h1>
            <img src={props.imgProp}/>
        </div>
    )
}