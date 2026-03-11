import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import fillerHeroHeader from './assets/fillerHeroHeader.jpg';
import logomtg from './assets/logomtg.svg';
import { Link } from "react-router-dom";
import SingleCard from "./singleCard";
import AccordionLearn from './accordian';
import NavigationBar from './navigationBar';

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
      
     <a href="compare"><button class="primaryButton">Compare cards</button></a>

       </div></div>
       </div>
    </section>

    <section class="alternativeBG">
        <h1 class="heading1B">A typical Magic: The Gathering Card</h1>
        <SingleCard />
    </section>

    <section>
        <h1 class="heading1" style={{paddingBottom: 40}}>How to read a Magic card</h1>
        <AccordionLearn />
    </section>

        <NavigationBar />
    </body>
  ) 
  
}

export default Home;