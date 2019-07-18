import React, { useState , useEffect } from "react";
import "./App.css";
import ModalComponent from './modal';
import styled from 'styled-components';


const Button = styled.button`
  background: transparent;
  color: dodgerblue;
  border-style: none;
  cursor: pointer;
`;

function App() {

  const [display, setDisplay] = useState(false);

  const toggleDisplay = () => {
    setDisplay(!display)
  }

  return (
    <div className="container">
      <Button onClick={toggleDisplay}>yooo</Button>
      { display ? <ModalComponent toggleDisplay={toggleDisplay} /> : null}
    </div>
  )
}

export default App;
