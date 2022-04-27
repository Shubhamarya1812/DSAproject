import React from 'react';

import './App.css';
import Navbar from './components/Navbar';

import image1 from "../src/assets/graph.jpeg";
import image2 from "../src/assets/linkedlist.jpeg";
import image3 from "../src/assets/queue.jpeg";
import image4 from "../src/assets/stack.jpg";
import image5 from "../src/assets/tree.jpeg";
import image0 from "../src/assets/machine_learning_03__Converted__generated.jpg"
// import Index from '../src/components/Index.js';
import Search from './components/Search';

function App() {
  return (
    <div>
        
<Navbar/>
<div class="container">
  <div class="row">
    <div class="col-md-12 text-center">
      <h3 class="animate-charcter">Algoguruzz</h3>
    </div>
  </div>
</div>
    <div class="max-width-1 m-auto">
        <hr/>
    </div>
    <div class="content max-width-1 m-auto my-2">
        <div class="content-left">
            <h1>Heaven for learning Algoozzz</h1>
            <p>algoGuyzz is a platform where you learn algorithms easily.</p>
            <p>An algorithm is a bunch of distinct directions to tackle a specific issue. It takes a bunch of info and
                produces an ideal result.
                Casually, an algorithm is only a note of steps to tackle an issue. They are basically an answer.
            </p>
        </div>
        <div class="content-right">
            <img src={image0} alt="algoGuyzz"/>
        </div>

    </div>
    <div class="max-width-1 m-auto">
        <hr/>
    </div>
    <div class="home-articles max-width-1 m-auto font1">
        <h2>Data Structure Algorithms</h2>
        <div class="home-article">
            <div class="home-article-img">
                <img src={image4} alt="algorithm"/>
            </div>
            <div class="home-article-content font1">
                <a href="/blogpost.html">
                    <h3>Algorithms- Stack</h3>
                </a>
                <p>A stack is a direct information structure that follows the guideline of Last In First Out (LIFO).
                    This implies the last component embedded inside the stack is eliminated first.
                    You can imagine the stack information structure as the heap of plates on top of another.
                    Here, you can:
                    1. Put another plate on top
                    2. Eliminate the top plate
                    Also, assuming that you need the plate at the base, you should initially eliminate every one of the
                    plates on top. This is actually how the stack information structure functions.
                </p>
                
                <span>13 April || 2 min read </span>
            </div>
        </div>

        <div class="home-article">
            <div class="home-article-img">
                <img src={image3} alt="algorithm"/>
            </div>
            <div class="home-article-content font1">
                <a href="/blogpost.html">
                    <h3>Algorithms- queue</h3>
                </a>
                <p>Queue is an abstract data structure somewhat similar to stack. It is a homogeneous collection of elements in which new elements are added(Enqueue) at one end and the existing elements are deleted from the other end (Dequeue) based on First In First OUT (FIFO) principle. Operations on Queue: Enqueue: Add a component to the furthest limit of the queue Dequeue: Remove a component from the front of the queue IsEmpty: Check assuming that the queue is vacant.
                </p>
                <div>Author Name</div>
                <span>13 April || 2 min read </span>
            </div>
        </div>

        <div class="home-article">
            <div class="home-article-img">
                <img src={image2} alt="algorithm"/>
            </div>
            <div class="home-article-content font1">
                <a href="/blogpost.html">
                    <h3>Algorithms- Linkedlist</h3>
                </a>
                <p>Linked list is a linear data structure. It is a collection of information components, called nodes highlighting the following node through a pointer. In more simple words one node is pointing to another node through a pointer. A linked list is an ordered collection of finite, homogeneous data elements known as nodes where the linear order is maintained by means of a link or pointer.
                </p>
                <div>Author Name</div>
                <span>13 April || 2 min read </span>
            </div>
        </div>

        <div class="home-article">
            <div class="home-article-img">
                <img src={image5} alt="algorithm"/>
            </div>
            <div class="home-article-content font1">
                <a href="/blogpost.html">
                    <h3>Algorithms- Trees</h3>
                </a>
                <p>A tree is a nonlinear hierarchical data structure that consists of nodes connected by edges. The tree is a nonlinear hierarchical data structure and comprises a collection of entities known as nodes. It connects each node in the tree data structure using "edges”, both directed and undirected.
                </p>
                <div>Author Name</div>
                <span>13 April || 2 min read </span>
            </div>
        </div>

        <div class="home-article">
            <div class="home-article-img">
                <img src={image1} alt="algorithm"/>
            </div>
            <div class="home-article-content font1">
                <a href="/blogpost.html">
                    <h3>Algorithms- Graphs</h3>
                </a>
                <p>A graph can be characterised as a gathering of vertices and edges that are utilised to associate or are connected with the vertices. A graph should be visible as a cyclic tree, where the vertices (Nodes) keep up with any complex relationship among them as opposed to having a guardian kid relationship. A graph is a couple of sets (V, E), where V is the arrangement of vertices and E is the arrangement of edges, interfacing the sets of vertices. A graph could be directed or undirected: Directed Graph: In this type of graph, edges form an ordered pair. Edges address a particular way from a vertex A to another vertex B. Node An is called the beginning node while node B is called terminal node. Undirected Graph: In this type of graph, edges don't have any direction. If an edge exists between vertex A and B then the vertices can be traversed from B to A as well as A to B.
                </p>
                <div>Author Name</div>
                <span>13 April || 2 min read </span>
            </div>
        </div>

    </div>
    <div class="footer" style={{height:"13px"}}>
        <p>Copyright &copy; Algoguruzz.com</p>
        <a href="https://www.vecteezy.com/free-vector/coding">Coding Vectors by Vecteezy</a>
    </div>

    </div>
  );
}

export default App;
