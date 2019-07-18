import React from "react";
import styled from 'styled-components';

const Box = styled.div`
    border-radius: 5px;
    border: 1px solid white;
    width: 960px;
    margin: 0 auto;
    background: transparent;
`;


export default function DescriptionBox(props){

    return (
        <Box>
            <h1>{props.dateProp}</h1>
            <p>{props.explanationProp}</p>
        </Box>
    )
}