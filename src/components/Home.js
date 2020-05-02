import { Link } from 'react-router-dom'
import { connect } from 'react-redux'


import React from 'react'



const Home = () => {




   
    return(
        <div class ="center-align">
           
            
            <p><img class="responsive-img " src= {require("../Photos/ (" + Math.floor((Math.random() * (124 - 1) + 1)) + ").jpg")} alt="Quote"/></p>
        </div>
    )

    
  
    
}




export default Home //'connect' is a function and it's a higher order component which wraps around 'Home' which allows to connect to redux