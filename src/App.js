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

          <div className='tech'>

           <div>HTML</div>
           <div>CSS</div>
           <div>Javascript</div>
           <div>React js</div>
           <div>Redux</div>
           <div>Data Structure</div>
           <div>Web Development</div>
           <div>Frontend Development</div>


          </div>

        </div>

      </div>
      <div className="right-div">

        <div className="exp">
          <div className="details">
            <i className="material-icons">work</i> 
            <span>Work Experience</span>
          </div>
          <div className="company">

            <h3>Front End Developer / Infosys</h3>
            <p>May 2018 - <span className="current">Current</span></p>
            <p>Software Engineer with 2+ year experience in developing and maintaining web applications. Adept at overseeing all phases of software development 
              life-cycle, from requirements gathering, design and implementation
               to maintenance.
            </p>

          </div>
        </div>
        <div className="exp">

          <div className="details">
            <i className="material-icons">school</i> 
            <span>Education</span>
          </div>

          <div className="company">

            <h3>Silicon Institute of Technology</h3>
            <p>Aug 2014 - Apr 2018</p>
            <p>BTECH - Computer Science</p>
            <p>8.19 CGPA</p>

          </div>

          <div className="company">

            <h3>Kendriya Vidyalaya NO. 4</h3>
            <p>Aug 2013 - Apr 2014</p>
            <p>Computer Science</p>
            <p>84%</p>

          </div>

        </div>
      </div>


    </div>

  );
}

export default App;
