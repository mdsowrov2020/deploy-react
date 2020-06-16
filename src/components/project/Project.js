import React,{Component} from 'react';
import './project.css';
import $ from 'jquery';
import mixitup from 'mixitup';





export class Project extends Component {

    componentDidMount(){
        var containerEl = document.querySelector('.project_main');

        var mixer = mixitup(containerEl);
        $('.filtering').on( 'click', '.control', function() {
    
            $(this).addClass('control-active').siblings().removeClass('control-active');
    
        });
    }


    render() {
        return (
            <>
       
       
            <section className="py-5 my-5">
                <div className="row justify-content-center">
                <div className="header">
                        <h2>
                           Some of My projects
                        </h2>

                    </div>
                </div>
                <div className="row filtering text-center justify-content-center pb-3 my-3">
                     <ul>
                         <li className="control mx-1 control-active" data-filter="all">All</li>
                         <li className="control mx-1" data-filter=".web"><span>Web</span> Design</li>
                         <li className="control mx-1" data-filter=".web_app"><span>Web</span> App</li>
                         <li className="control mx-1" data-filter=".psd">Psd <span> to html</span></li>
      
                     </ul>
                 </div>
     
     
                 <div className="row project_main justify-content-center">
     
                     <div className="col-md-3 my-3 mix web">
                         <div className="project_image">
                             <img src={require('./images/design1.PNG')}  className="img-fluid"  />
                         </div>
                     </div>
                     <div className="col-md-3 my-3 mix web_app">
                         <div className="project_image">
                             <img src={require('./images/app2.PNG')} className="img-fluid"  />
                         </div>
                     </div>
                     <div className="col-md-3 my-3 mix psd">
                         <div className="project_image">
                             <img src={require('./images/edu.jpg')} className="img-fluid"  />
                         </div>
                     </div>
                     <div className="col-md-3 my-3 mix psd">
                         <div className="project_image">
                             <img src={require('./images/edu.jpg')} className="img-fluid"  />
                         </div>
                     </div>
                     <div className="col-md-3 my-3 mix web">
                         <div className="project_image">
                             <img src={require('./images/design2.PNG')} className="img-fluid"  />
                         </div>
                     </div>
                     <div className="col-md-3 my-3 mix web_app">
                         <div className="project_image">
                             <img src={require('./images/app1.PNG')} className="img-fluid"  />
                         </div>
                     </div>
                     <div className="col-md-3 my-3 mix web">
                         <div className="project_image">
                             <img src={require('./images/design3.PNG')} className="img-fluid"  />
                         </div>
                     </div>
                     <div className="col-md-3 my-3 mix web_app">
                         <div className="project_image">
                             <img src={require('./images/app3.PNG')} className="img-fluid"  />
                         </div>
                     </div>
                     
                 </div>
     
     
               
            </section>
            
            
            </>
        )
    }
}




export default Project;