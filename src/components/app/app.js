import React from 'react';

import Header from '../header';
import Certificate from '../certificate';
import About from '../about';
import Footer from '../footer';
import './app.scss';

function App() {
  return (
   <div>
      <Header/>
      <Certificate/>
      <About/>
      <Footer/>
      
   </div>
  );
}

export default App;
