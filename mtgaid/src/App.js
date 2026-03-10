import './App.css';
import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import logomtg from './assets/logomtg.svg';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./home";
import Timeline from "./timeline";
import Compare from "./compare";

function App() {
  return (
    <BrowserRouter>
    <link rel="preconnect" href="https://fonts.googleapis.com"></link>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
<link href="https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300..900;1,300..900&display=swap" rel="stylesheet">
</link>

      <nav activeKey="/home"
      onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}>
        <div class="container-fluid">
        <Link to="/" class="logomtg"><img src={logomtg} class="logomtg"></img></Link>

        <Link to="/" class="pageLinks">Home</Link> 
        <Link to="/compare" class="pageLinks">Compare</Link> 
        <Link to="/timeline" class="pageLinks">Timeline</Link> 
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/compare" element={<Compare />} />
        <Route path="/timeline" element={<Timeline />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;
