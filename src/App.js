import React from 'react';
import displayImage from './image/display_image.jpg'
import './App.css';


function App() {
  return (
    
    <div className="main-container">

      <div className="left-div">

        <div className="display-image">

          <img src={displayImage} alt="dp" />

        </div>  

        <div className="name">

          <h3>Nithin Lukose</h3>

        </div> 
        <div className="personal-details">

          <div className="details">
            <i className="material-icons">work</i> 
            <span>Frontend Developer</span>
          </div>

          <div className="details">
            <i className="material-icons">home</i> 
            <span>Bangalore</span>
          </div>

          <div className="details">
            <i className="material-icons">email</i> 
            <span>nithinclukose12@gmail.com</span>
          </div>

          <div className="details">
            <i className="material-icons">phone</i> 
            <span>8984818292</span>
          </div>

        </div> 
        <div className="skills">

          <div className="details">
            <i className="material-icons">star</i> 
            <span>Skills</span>
          </div>

          <div className="tech">
            <p>HTML</p>
          </div>
          
          <div class="container">
            <div class="skill avg">90%</div>
          </div>

          <div className="tech">
            <p>CSS</p>
          </div>
          
          <div class="container">
            <div class="skill avg">90%</div>
          </div>

          <div className="tech">
            <p>Javascript</p>
          </div>

          <div class="container">
            <div class="skill expert">95%</div>
          </div>

        </div>

      </div>
      <div className="right-div">professional details</div>


    </div>

  );
}

export default App;
