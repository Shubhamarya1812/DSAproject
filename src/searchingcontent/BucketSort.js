import React from 'react';

import "../components/navbar.css"
import { Link } from 'react-router-dom';
import Graphh from "../assets/Graphh.jpg"
import Navbar from '../components/Navbar';

 export default function BucketSort() {
    return (
    
    <div>
        <Navbar/>
        <h1 style={{fontFamily:"sans-serif"}}>Bucket Sort</h1>
        <img src={Graphh}  style={{width:"50%" ,padding: 20} }/> 
        <div className='class23' style={{fontFamily:"sans-serif"}}>

        <p class="font1">Bucket Sort is a sorting algorithm that divides the unsorted array elements into several groups called buckets. 
            Each bucket is then sorted by using any of the suitable sorting algorithms or recursively applying the same bucket algorithm.</p>
        <p class="font1">Finally, the sorted buckets are combined to form a final sorted array.</p>
        <p class="font1">It is a stable algorithm.</p>
        <p class="font1"><h3 class="font1">Complexity of Bucket Sort:</h3></p>
        <ul class="font1">
            <li>Best case Time Complexity: O(n + k)</li>
            <li>Average Case Time Complexity: O(n + k) </li>
            <li>Worst Case Time Complexity: O(n^2)</li>
            <li>Space Complexity: O(nk)</li>
        </ul>
        <p class="font1">
        <h3 class="font1">Algorithm of Bucket Sort:</h3>
        </p>
        <ol class="font1">
            <li>Create N buckets each of which can hold a range of values for all the buckets.</li>
            <li>Initialise each bucket with 0 values for all the buckets</li>
            <li>Put elements into buckets matching the range for all the buckets.</li>
            <li>Sort elements in each bucket.</li>
            <li>Gather elements from each bucket.</li>
            <li>End bucketSort.</li>
        </ol>
</div>
</div>
    );
}

