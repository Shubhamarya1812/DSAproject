import React from "react";
import "../components/search.css"

import Navbar from "./Navbar";
import {Row,Col,Card,Button} from "react-bootstrap"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Routes,
    Link
  } from "react-router-dom";

import image1 from "../assets/Graphh.jpg";
import image2 from "../assets/Linked_List.jpg";
import image3 from "../assets/Queuee.jpg";
import image4 from "../assets/Stackk.jpg";
import image5 from "../assets/Treee.jpg";
import image6 from "../assets/BinarySearchTree.jpg";
import image7 from "../assets/shubham.jpeg";
import image8 from "../assets/yatin.jpg";
import image9 from "../assets/twisha.jpeg";

// import Index from '../src/components/Index.js';
export default function About(){

    return(
        <div>
            <Navbar/>
            <marquee scrollamount="10"><h3>Founders</h3></marquee>
            


<div className="cardcard" style={{display:"flex " ,padding:"2rem",paddingLeft:"1rem",marginLeft:"1rem"}}>  
            <Card style={{ width: '18rem' }}>
  <Card.Img variant="top"  src={image7} />
  <Card.Body>
    <Card.Title>Shubham Arya</Card.Title>
    <Card.Text>
      
    </Card.Text>
    <Link to="/binary" className="nav-link" ></Link>
  </Card.Body>
</Card>

<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={image8} />
  <Card.Body>
    <Card.Title>Yatin Agarwal</Card.Title>
    <Card.Text>
     
    </Card.Text>
    <Link to="/queue" className="nav-link" ></Link>
  </Card.Body>
</Card>

<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={image9} />
  <Card.Body>
    <Card.Title>Twisha M Mistry</Card.Title>
    <Card.Text>
 
    </Card.Text>
    <Link to="/linkedlist" className="nav-link" ></Link>
  </Card.Body>
</Card>
</div>
</div>)};