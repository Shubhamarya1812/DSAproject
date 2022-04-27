import React from 'react';

import "../components/navbar.css"
import { Link } from 'react-router-dom';
import BinarySearchTree from "../assets/BinarySearchTree.jpg"
import Navbar from '../components/Navbar';

 export default function Binary() {
    return (
    
    <div>
        <Navbar/>
        <h1 style={{fontFamily:"sans-serif"}}> Binary Search</h1>
        <img src={BinarySearchTree}  style={{width:"50%" ,padding: 20} }/> 
        <div className='class23' style={{fontFamily:"sans-serif"}}>

            <p>Binary search, also known as half-interval search, logarithmic search, or binary chop, is a search algorithm that finds the position of a target value within a sorted array. Binary search compares the target value to the middle element of the array.</p>

             <p>[1] To implement binary sorting technique only sorted arrays are taken.</p>

             <p>[2] The approach is to start searching for the element from the middle of the sorted array.</p>
             <h1>Algorithm of Binary Search:</h1>
             <ol>
                 <li>The array in which searching is to be performed is:Initial array. Let x be the element to be searched.</li>
                 <li>Set two pointers low and high at the lowest and the highest positions respectively.</li>
                 <li>Find the middle element mid of the array ie. arr[(low + high)/2]</li>
                 <li>If x == mid, then return mid.Else, compare the element to be searched with mid.</li>
                 <li>If x {">"} mid, compare x with the middle element of the elements on the right side of mid. This is done by setting low to low = mid + 1.</li>
                 <li>Else, compare x with the middle element of the elements on the left side of mid. This is done by setting high to high = mid - 1.</li>
                 <li>Repeat steps 3 to 6 until low meets high</li>
                 <li>x is found</li>
             </ol>
            
        </div>
        
    </div>


    

      
        

    );
}

