import React, { useState , useEffect } from "react";
import Component from './component'
import DescriptionBox from './description'
import styled from 'styled-components';


const SpaceBox = styled.div`
        text-align: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border: 1px solid white;
`;

const Button = styled.button`
  background: transparent;
  color: dodgerblue;
  border-style: none;
  cursor: pointer;
`;

 function ModalComponent(props){
      const [apod, setApod] = useState('');

  useEffect(() => {
    fetch('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=2012-03-14')
    .then(res => res.json())
    .then(res => {
      console.log(res)
      setApod(res)
    })
    .catch(res => {
      console.log('error:', res)
    })
  }, []);
  
  return (
    <SpaceBox>
      <Component imgProp={apod.url} titleProp={apod.title}/>
      <DescriptionBox dateProp={apod.date}  explanationProp={apod.explanation}/>
      <Button onClick={props.toggleDisplay}>not yooo</Button>
    </SpaceBox>

  );
    // return (
    //     <div>
    //     <Button color="danger" onClick={this.toggle}>{this.props.buttonLabel}</Button>
    //     <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
    //       <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
    //       <ModalBody>
    //         Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    //       </ModalBody>
    //       <ModalFooter>
    //         <Button color="primary" onClick={this.toggle}>Do Something</Button>{' '}
    //         <Button color="secondary" onClick={this.toggle}>Cancel</Button>
    //       </ModalFooter>
    //     </Modal>
    //   </div>
    // )
}



export default ModalComponent;