import React, { useState , useEffect } from "react";
import "./App.css";

import Component from './component'
import DescriptionBox from './description'

function App() {
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
    <div className="App">

      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀!
      </p>
      <Component imgProp={apod.url} titleProp={apod.title}/>
      <DescriptionBox dateProp={apod.date}  explanationProp={apod.explanation}/>
    </div>
  );
}

export default App;
