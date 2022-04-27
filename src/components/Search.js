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

// import Index from '../src/components/Index.js';
export default function Search(){

    return(
        <div>
            <Navbar/>
<div className="cardcard" style={{display:"flex " ,padding:"2rem",paddingLeft:"1rem",marginLeft:"1rem"}}>  
            <Card style={{ width: '18rem' }}>
  <Card.Img variant="top"  src={image6} />
  <Card.Body>
    <Card.Title>Binary Search</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Link to="/binary" className="nav-link" >Binary</Link>
  </Card.Body>
</Card>

<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={image3} />
  <Card.Body>
    <Card.Title>Queue</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Link to="/queue" className="nav-link" >Queue</Link>
  </Card.Body>
</Card>

<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={image2} />
  <Card.Body>
    <Card.Title>Linked List</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Link to="/linkedlist" className="nav-link" >LinkedList</Link>
  </Card.Body>
</Card>

<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={image1} />
  <Card.Body>
    <Card.Title>Graph</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Link to="/graph" className="nav-link" >Graph</Link>
  </Card.Body>
</Card>
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={image5} />
  <Card.Body>
    <Card.Title>Tree</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Link to="/tree" className="nav-link" >Tree</Link>
  </Card.Body>
</Card>
</div>
<div className="cardcard" style={{display:"flex " ,padding:"2rem",paddingLeft:"1rem",marginLeft:"1rem"}}>  
            <Card style={{ width: '18rem' }}>
  <Card.Img variant="top"  src={image4} />
  <Card.Body>
    <Card.Title>Stack</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Link to="/stack" className="nav-link" >Stack</Link>
  </Card.Body>
</Card>

<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={image3} />
  <Card.Body>
    <Card.Title>Bucket-sort</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Link to="/bucket" className="nav-link" >Bucket-sort</Link>
  </Card.Body>
</Card>

<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={image2} />
  <Card.Body>
    <Card.Title>Counting Sort</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Link to="/counting" className="nav-link" >CountingSort</Link>
  </Card.Body>
</Card>

<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={image1} />
  <Card.Body>
    <Card.Title>Insertion</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Link to="/insertion" className="nav-link" >Insertion</Link>
  </Card.Body>
</Card>
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={image1} />
  <Card.Body>
    <Card.Title>Graph</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Link to="/graph" className="nav-link" >Graph</Link>
  </Card.Body>
</Card>


     


</div>
<div className="cardcard" style={{display:"flex " ,padding:"2rem",paddingLeft:"1rem",marginLeft:"1rem"}}>  
            <Card style={{ width: '18rem' }}>
  <Card.Img variant="top"  src={image4} />
  <Card.Body>
    <Card.Title>Stack</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Link to="/stack" className="nav-link" >Stack</Link>
  </Card.Body>
</Card>

<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={image3} />
  <Card.Body>
    <Card.Title>Queue</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Link to="/queue" className="nav-link" >Queue</Link>
  </Card.Body>
</Card>

<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={image2} />
  <Card.Body>
    <Card.Title>Linked List</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Link to="/linkedlist" className="nav-link" >LinkedList</Link>
  </Card.Body>
</Card>

<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={image1} />
  <Card.Body>
    <Card.Title>Graph</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Link to="/graph" className="nav-link" >Graph</Link>
  </Card.Body>
</Card>
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={image1} />
  <Card.Body>
    <Card.Title>Graph</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Link to="/graph" className="nav-link" >Graph</Link>
  </Card.Body>
</Card>


     


</div>
 
 
 
        </div>
    )
};