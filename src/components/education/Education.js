import React, { Component } from 'react'
import './education.css'

class education extends Component {
    render() {
        return (
           <section className=" mt-5  py-5" >
               <div className="edu_section_inner">
               <div className="container">
                   <div className="row justify-content-center pb-5">
                       <div className="education_head">
                       <h2>Education</h2>

                       </div>
                   </div>
              
              <div className="row justify-content-center">
                  <div className="col-md-6  main_content">
                      <div className="education_content">
                          <div className="education_inner_content">
                          <i class="fas fa-school school"></i>
                         
                          </div>
                          <div className="content">
                          <h3>School</h3>
                          <h4>Bangladesh Railway Govt. High School</h4>
                          <p>I have passed my SSC exam in 2014 from Bangladesh Railway Govt. High School and I got GPA-5 from comilla board. 
                              It is situated in Brahmanbaria's,akhaura. 
                          </p>
                          </div>
                      </div>
                  </div>
                  <div className="col-md-6">
                  
                      <div className="education_content">
                          <div className="education_inner_content">
                          <i class="fas fa-university college"></i>
                         
                          </div>
                          <div className="content">
                          <h3>College</h3>
                          <h4>Cambrian College,Dhaka</h4>
                          <p>I have passed my HSC exam in 2016 from King's College and I got GPA-5 from Dhaka board.
                              This college is situated in Bashundhora,Residential-area, Dhaka.</p>
                          </div>
                      </div>
                  </div>
                  <div className="col-md-10">
              
                      <div className="education_content varsity_content">
                          <div className="education_inner_content">
                          <i class="fas fa-graduation-cap varsity"></i>
                         
                          </div>
                          <div className="content">
                              <h3>University</h3>
                          <h4>Daffodil International University</h4>
                          <p>Currently I am studying at Daffodil International university ,department of Software Engineering.And I have already completed
                              10<sup>th</sup> semester out of 12 semester. It is situated in Ashulia,Dhaka,.
                          </p>
                          </div>
                      </div>
              
                  </div>
              
              </div>
              
                             </div>

               </div>
           </section>
        )
    }
}

export default education
