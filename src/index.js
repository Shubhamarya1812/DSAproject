import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Link
} from "react-router-dom";

import Contact from '../src/components/Contact.js';
import Search from '../src/components/Search.js';
import About from '../src/components/About.js';
import Binary from './searchingcontent/Binary.js';
import Queue from  './searchingcontent/Queue.js';
import LinkedList from  './searchingcontent/LinkedList.js';
import Graph from  './searchingcontent/Graph.js';
import Tree from  './searchingcontent/Tree.js';
import Stack from  './searchingcontent/Stack.js';
import BucketSort from './searchingcontent/BucketSort.js';
import CountingSort from './searchingcontent/CountingSort.js';
import Insertion from './searchingcontent/Insertion.js';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    

    <Router>
    
      <Routes>
        <Route path={"/"} exact element={<App />} />
        <Route path={"/contact"} exact element={<Contact />} />
        <Route path={"/search"} exact element={<Search/>}/>
        <Route path={"/about"} exact element={<About/>}/>
        <Route path ={"/binary"} exact element={<Binary/>}/>
        <Route path ={"/queue"} exact element={<Queue/>}/>
        <Route path ={"/linkedlist"} exact element={<LinkedList/>}/>
        <Route path ={"/graph"} exact element={<Graph/>}/>
        <Route path ={"/tree"} exact element={<Tree/>}/>
        <Route path ={"/stack"} exact element={<Stack/>}/>
        <Route path ={"/bucket"} exact element={<BucketSort/>}/>
        <Route path ={"/counting"} exact element={<CountingSort/>}/>
        <Route path ={"/insertion"} exact element={<Insertion/>}/>
      </Routes>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

