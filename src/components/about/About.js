import React, { Component } from 'react'
import './about.css'

class about extends Component {
    render() {
        return (
            <section className="bg_color py-5 mt-5">
                <div className="row justify-content-center pb-5">
                    <div className="header">
                        <h2>
                            About me
                        </h2>

                    </div>

                </div>
                <div className="row justify-content-center">
                <div className="col-md-6 col-lg-6">
                 <div className="about_mid">
                     <div className="about_image" style={{ backgroundImage: `url(${require("./images/antu.jpg")})` }}>

                     </div>

                 </div>

             </div>
              
              <div className="col-md-6 col-lg-6">
                 <div className="about_left">
                     <div className="about_left_content text-justify  p-4">
                         <h5>Welcome to my personal website</h5>
                         <p>
                             At first, take my salam and I hope you are well by the mercy of allah. I started my coding career from the begining of varsity life.  
                             Then I started to learn web programming in <span>Creative It Institute</span>. I already have 3 years of experience in front end web development.
                             I have already completed many projects with some of my friends in <span>Creative It Institute</span> and then I also completed many projects in varsity.
                             Currently I am learning full stack web development and amazon web service(AWS).
                         </p>
                         <h5>Follow me :</h5>
                         <a href="#" target="_blank"><i className="fab fa-twitter tw" title="Twitter"></i></a>
                    <a href="#" target="_blank"><i className="fab fa-facebook fb" title="Facebook"></i></a>
                    <a href="#" target="_blank"><i className="fab fa-instagram in" title="Instagram"></i></a>
                    <a href="#" target="_blank"><i className="fab fa-linkedin-in ln" title="Linkedin"></i></a>

                     </div>

                 </div>

             </div>
           
           
         </div>
            </section>
            
        )
    }
}

export default about
