import React from 'react';

import "../components/navbar.css"
import { Link } from 'react-router-dom';
import BinarySearchTree from "../assets/BinarySearchTree.jpg"
import Navbar from '../components/Navbar';

 export default function CountingSort() {
    return (
    
    <div>
        <Navbar/>
        <h1 style={{fontFamily:"sans-serif"}}> Binary Search</h1>
        <img src={BinarySearchTree}  style={{width:"50%" ,padding: 20} }/> 
        <div className='class23' style={{fontFamily:"sans-serif"}}>

        <p class="font1">Counting sort is a sorting algorithm that sorts the elements of an array by counting the number of occurrences of each unique element in the array.
            The count is stored in an auxiliary array and the sorting is done by mapping the count as an index of the auxiliary array.</p>
        <p class="font1">Counting Sort is a stable algorithm.</p>
        <p class="font1">Complexity of Counting sort:</p>
        <p class="font1">
            <ul>
                <li>Best case Time Complexity: O(n)</li>
                <li>Average Case Time Complexity: O(n + k) </li>
                <li>Worst Case Time Complexity: O(k)</li>
                <li>Space Complexity: O(k)</li>
            </ul>
        </p>
        <p class="font1">
        <h3 class="font1">Algorithm of Counting Sort:</h3>
        </p>
        <ol class="font1">
            <li>countingSort(array, size)</li>
            <li>max {"<-"} find largest element in array</li>
            <li>  initialise count array with all zeros.</li>
            <li>for j {"<-"} 0 to size</li>
            <li>find the total count of each unique element and</li>
            <li>store the count at jth index in count array</li>
            <li>for i {"<-"} 1 to max</li>
            <li>find the cumulative sum and store it in count array itself</li>
            <li>for j {"<-"} size down to 1</li>
            <li>restore the elements to array</li>
            <li>decrease count of each element restored by 1</li>
        </ol>
        </div>
        
    </div>


    

      
        

    );
}

