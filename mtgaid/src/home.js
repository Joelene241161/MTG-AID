import './App.css';
import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import fillerHeroHeader from './assets/fillerHeroHeader.jpg';
import logomtg from './assets/logomtg.svg';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import SplitButton from 'react-bootstrap/SplitButton';

function Home() {
  return (
    <body class="bodyBG">
     <section>
      <div class="container-fluid row">
      <div class="col-lg-7">
      <img src={fillerHeroHeader} class="heroImage"></img>
      </div>
      <div class="col-lg-5 d-flex align-items-center" style={{paddingBottom:16}}>
        <div>
      <h1 class="headingHero">Welcome to MTG AID</h1>
      <p class="bodyText">Here you can get interesting insights on Magic: The Gathering Cards. You can compare two different cards’ stats on our comparison page.</p>
      <button class="primaryButton">Compare cards</button>
       </div></div>
       </div>
    </section>

    <section class="alternativeBG">
        <h1 class="heading1B">Card example info</h1>
        <div class="container-fluid row">
            <div class="col-lg-5">
            <img src={fillerHeroHeader} class="heroImage"></img>
            </div>
            <div class="col-lg-7">
              <h2 class="heading2">Card name:</h2>
              <p class="bodyTextB">Description of card / card text. Description of card / card text. Description of card / card text. Description of card / card text. </p>
        <div class="container-fluid row">
            <div>
              <button class="tagButton">Information</button>
              <button class="tagButton">Information</button>
              <button class="tagButton">Information</button>
              <button class="tagButton">Information</button>
            </div> 
            <div>
              <button class="tagButton">Information</button>
              <button class="tagButton">Information</button>
              <button class="tagButton">Information</button>
              <button class="tagButton">Information</button>
            </div> 
            <div>
              <button class="tagButton">Information</button>
              <button class="tagButton">Information</button>
            </div> 
        </div> 
            </div>
        </div>
    </section>

    <section>
        <h1 class="heading1">Generate a card from a set</h1>
        <>
      {[DropdownButton].map((DropdownType, idx) => (
        <DropdownType
          key={idx}
          id={`dropdown-button-drop-${idx}`}
          size="lg"
          title="Choose a set"
        >
          <Dropdown.Item eventKey="1">Action</Dropdown.Item>
          <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
          <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
          <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
        </DropdownType>
      ))}
    </>

    <h2 class="heading2B">Card name:</h2>

    <div class="container-fluid row">
            <div>
              <button class="tagButton">Information</button>
              <button class="tagButton">Information</button>
              <button class="tagButton">Information</button>
              <button class="tagButton">Information</button>
            </div>
    </div>
    </section>

      <footer class="alternativeBG">
        <div class="container-fluid">
        <Link to="/"><img src={logomtg} class="logoFooter"></img></Link>

        <Link to="/" class="pageLinks">Home</Link> 
        <Link to="/compare" class="pageLinks">Compare</Link> 
        <Link to="/timeline" class="pageLinks">Timeline</Link> 
        </div>
      </footer>

    </body>
  ) 
  
}

export default Home;