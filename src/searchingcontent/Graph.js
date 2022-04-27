import React from 'react';

import "../components/navbar.css"
import { Link } from 'react-router-dom';
import Graphh from "../assets/Graphh.jpg"
import Navbar from '../components/Navbar';

 export default function Graph() {
    return (
    
    <div>
        <Navbar/>
        <h1 style={{fontFamily:"sans-serif"}}>Graph</h1>
        <img src={Graphh}  style={{width:"50%" ,padding: 20} }/> 
        <div className='class23' style={{fontFamily:"sans-serif"}}>

        <p class="font1">A graph can be characterised as a gathering of vertices and edges that are utilised to associate or are connected with the vertices. 
            A graph should be visible as a cyclic tree, where the vertices (Nodes) keep up with any complex relationship among them as opposed to having a guardian kid relationship.</p>
        <p class="font1">A graph is a couple of sets (V, E), where V is the arrangement of vertices and E is the arrangement of edges, interfacing the sets of vertices.</p>
        <p class="font1">A graph could be directed or undirected:</p>
        <ol class="font1">
            <li> <b> Directed Graph</b>: In this type of graph, edges form an ordered pair. Edges address a particular way from a vertex A to another vertex B. Node An is called the beginning node while node B is called terminal node.</li>
            <li><b> Undirected Graph</b>: In this type of graph, edges don't have any direction. If an edge exists between vertex A and B then the vertices can be traversed from B to A as well as A to B.</li>
        </ol>
        <p class="font1"><b>Important terms of Graph:</b></p>
        <ul class="font1">
            <li><b>Path</b>: A path can be defined as the sequence of nodes that are followed in order to reach some terminal node V from the initial node U.</li>
            <li><b>Closed Path</b>: A path will be called a closed path if the initial node is the same as the terminal node. A path will be a closed path if V0=VN.</li>
            <li><b>Simple Path</b>: If all the nodes of the graph are distinct with an exception V0=VN, then such path P is called a closed simple path.
</li>
            <li><b>Cycle</b>: A cycle can be defined as the path which has no repeated edges or vertices except the first and last vertices.</li>
            <li><b>Connected Graph</b>: A connected graph is the one in which some path exists between every two vertices (u, v) in V. There are no isolated nodes in the connected graph.</li>
            <li><b>Complete Graph</b>: A complete graph is the one in which every node is connected with all other nodes. A complete graph contains n(n-1)/2 edges where n is the number of nodes in the graph.</li>
            <li><b>Weighted Graph</b>: In a weighted graph, each edge is assigned with some data such as length or weight. The weight of an edge e can be given as w(e) which must be a positive (+) value indicating the cost of traversing the edge.
</li>
            <li><b>Digraph</b>: A digraph is a directed graph in which each edge of the graph is associated with some direction and the traversing can be done only in the specified direction.
</li>
            <li><b>Loop</b>: An edge that is associated with the similar endpoints can be called a Loop.</li>
            <li><b>Adjacent Nodes</b>: If two nodes u and v are connected via an edge e, then the nodes u and v are called neighbours or adjacent nodes.</li>
            <li><b>Degree of the Node</b>: A degree of a node is the number of edges that are connected with that node. A node with degree 0 is called an isolated node.</li>

        </ul>


        <p class="font1"><b>Basic operations on Graph:</b></p>
        <ul class="font1">
            <li>Add Vertex: It adds a vertex in the graph</li>
            <li>Add Edge: It adds an edge between two existing vertices</li>
            <li>Display Vertex: It displays a vertex of a graph</li>
        </ul>

        <p class="font1"><b>Representation of Graph:</b></p>
        <ul class="font1">
            <p class="font1">There exists two types of ways through which a graph can be represented:</p>
            <li>Adjacency Matrix</li>
                <ul>
                    <li>An adjacency matrix is a 2D array of V x V vertices. Each row and column represent a vertex.</li>
                    <li>If the value of any element a[i][j] is 1, it represents that there is an edge connecting vertex i and vertex j.
                    </li>
                </ul>
            
            
        </ul>
</div>
</div>
    );
}

