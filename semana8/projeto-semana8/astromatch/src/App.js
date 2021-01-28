import React, {useState, useEffect} from 'react';
import './App.css';
import Container from './components/Container/styled';
import Header from './components/Header/index';
import Card from './components/Card/index'
import Footer from './components/Footer/index'

function App() {

  const [Home, setHome] = useState (false)

  const changeHome = () => {
    setHome(true);
  }




  if (Home === false) {
    return (
      <Container>
        <Header
         change = {changeHome}

        />
        
        <Card/>
        <Footer/>
      </Container>
    );
  }
  else {
    return(
    <Container>
      <Header/>
      

    </Container>
    )
  }
  
}

export default App;
