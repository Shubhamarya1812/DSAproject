import React from "react";
import "../components/contact.css"
import Navbar from "./Navbar";

export default function  Contact() {
    return(
    <div>


      

  <Navbar/>
<div class="max-width-1 m-auto">
    <hr/>
</div>
<div class="contact-content font1">
    <div class="max-width-1 m-auto">
        
        <h2>Feel free to contact us!</h2>
        <div class="contact-form">
            <div class="form-box">
                <input type="text" placeholder="Enter Your Name"/>
            </div>
            <div class="form-box">
                <input type="text" placeholder="Enter Your Mobile Number"/>
            </div>
            <div class="form-box">
                <input type="text" placeholder="Enter Your Email ID"/>
            </div>
            <div class="form-box">
                <textarea name="" id="" cols="30" rows="10" placeholder="How May We Help You?"></textarea>
            </div>
            <div class="form-box">
                <button class="btn">Submit</button>
            </div>
        </div>
    </div>
</div>

<div class="footer">
    <p>Copyright &copy; Algoguruzz.com</p>
    <a href="https://www.vecteezy.com/free-vector/coding">Coding Vectors by Vecteezy</a>
</div>
    </div>
    )
};

