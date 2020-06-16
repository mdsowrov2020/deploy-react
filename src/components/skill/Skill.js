import React, { Component } from 'react';
import './skill.css';
import Card from '../Cards/Card'
import ReactDom from 'react-dom'
import $ from 'jquery';



export class Skill extends Component {
    componentDidMount() {
        let _this = this;
        $('.skill_per').each(function(){
            var $this = $(this);
            var per = $this.attr('per');
            $this.css("width",per+'%');
            $({animatedValue : 0}).animate({animatedValue : per},{
                duration: 100,
                step: function(){
                    $this.attr('per',Math.floor(this.animatedValue) + '%');
                },
                complete:  function(){
                    $this.attr('per',Math.floor(this.animatedValue) + '%');
                }
            });
        });
        
        
        
      }
    render() {
        return (
            <section className="skill_part pt-5">

     
            <div className="container py-5">
                <div className="row justify-content-center">
                
                        <div className="skill_head text-center">
                                <h2>Technical Skills</h2>
                        </div>
                   
                </div>
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="row  justify-content-center skills">
                            <div className="col-md-6">
                                <div className="skill">
                                    <div className="skill_name">ReactJs</div>
                                    <div className="skill_bar">
                                        <div className="skill_per react" per="70"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="skill">
                                    <div className="skill_name">Web Design</div>
                                    <div className="skill_bar">
                                        <div className="skill_per" per="90"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="skill">
                                    <div className="skill_name">python</div>
                                    <div className="skill_bar">
                                        <div className="skill_per" per="60"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="skill">
                                    <div className="skill_name">Django</div>
                                    <div className="skill_bar">
                                        <div className="skill_per" per="50"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="skill">
                                    <div className="skill_name">php</div>
                                    <div className="skill_bar">
                                        <div className="skill_per" per="30"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="skill">
                                    <div className="skill_name">Java script</div>
                                    <div className="skill_bar">
                                        <div className="skill_per" per="60"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="skill">
                                    <div className="skill_name">"C"</div>
                                    <div className="skill_bar">
                                        <div className="skill_per" per="65"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="skill">
                                    <div className="skill_name">Java</div>
                                    <div className="skill_bar">
                                        <div className="skill_per" per="40"></div>
                                    </div>
                                </div>
                            </div>
                           
                        </div>
                    </div>
                </div>
            
            </div>
        
        
            {/* soft skill part */}
             <div className="soft_skill" style={{ backgroundImage: `url(${require("./images/soft.jpg")})` }}>
                 <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-md-6">
                                <div className="inner_soft_skill">
                                    <h2>Soft skills</h2>
                                    <ul>
                                        <li>
                                            <span><i class="far fa-hand-point-right"></i></span>Time management
                                        </li>
                                        <li>
                                        <span><i class="far fa-hand-point-right"></i></span>Self-motivation
                                        </li>
                                        <li>
                                        <span><i class="far fa-hand-point-right"></i></span>Confident, articulate, and professional speaking abilities
                                        </li>
                                        <li>
                                        <span><i class="far fa-hand-point-right"></i></span> Empathic listener and persuasive speaker
                                        </li>
                                        <li>
                                        <span><i class="far fa-hand-point-right"></i></span>Speaking in public, to groups, or via electronic media
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                 </div>
             </div>
             </section>
        )
    }
}

export default Skill

