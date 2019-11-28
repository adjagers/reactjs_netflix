import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container} from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import movie from './assets/images/movie-cover.jpg';
import Col from 'react-bootstrap/Col';
import logo from './assets/images/logo.png';
import brand from './assets/images/Netflix_Symbol.png';
import billboardLogo from './assets/images/billboard-logo.jpg';
import notification from './assets/icons/notification.svg';
import gift from './assets/icons/gift.svg';
import profile from './assets/icons/profile-picture.jpg';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import search from './assets/icons/search.svg';
import play from './assets/icons/play.svg';
import MovieList from './components/MovieList.js';
import videoBG from './assets/video.mp4';
import './App.css';

function App() {
  return (
    <div className="App">

    <header className="App-header">
      <div className="main-header">
        <Navbar bg="light" expand="lg">
    <Navbar.Brand href="#home"><img className="logo" src={logo} alt=""/></Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link href="player.js">Homepagina</Nav.Link>
        <Nav.Link href="#link">Series</Nav.Link>
        <Nav.Link href="#link">Films</Nav.Link>
        <Nav.Link href="#link">Onlangs Toegevoegd</Nav.Link>
        <Nav.Link href="#link">Mijn Lijst</Nav.Link>
      </Nav>
      <Form inline>
        <Button variant="outline"><img className="icon" src={search} alt=""/></Button>
        <Button variant="outline"><img className="icon" src={gift} alt=""/></Button>
        <Button variant="outline"><img className="icon" src={notification} alt=""/></Button>
        <Button variant="outline"><img className="icon" src={gift} alt=""/></Button>
          <NavDropdown title="{profile}" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>
      </Form>
    </Navbar.Collapse>
  </Navbar>
        <Container fluid={true}>
          <div className="netflix-brand">
            <img className="brand d-flex" src={brand} alt=""/> <p>Film</p></div>
          <img src={billboardLogo} className="App-logo" alt="logo"/>
          <div className="billboard-description">
            <p>Twee tieners staan voor de uitdaging van hun leven. Maar overwinnen betekent de ultieme prijs: de Heilige Graal.</p>
          </div>
          <div className="billboard-description">
            <a className="flat-button"><img className="billboard-icon" src={play} alt=""/>Afspelen</a>
          </div>
        </Container>
    </div>
    <video id="videoBG" poster="" autoPlay loop> <source src={videoBG} type="video/mp4"></source></video>
    </header>
    <h2>Mijn Lijst</h2>

<MovieList />
  <h2>My Phonebook</h2>

  <input type="text" id="myInput" onkeyup="myFunction()" placeholder="Search for names.." title="Type in a name">

  <ul id="myUL">
    <li><a href="#">Adele</a></li>
    <li><a href="#">Agnes</a></li>

    <li><a href="#">Billy</a></li>
    <li><a href="#">Bob</a></li>

    <li><a href="#">Calvin</a></li>
    <li><a href="#">Christina</a></li>
    <li><a href="#">Cindy</a></li>
  </ul>

  </div>);
}

export default App;
