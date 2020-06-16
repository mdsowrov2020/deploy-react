import React, { Component } from 'react';
import './footer.css';

class Footer extends Component{
    render(){
        return(
            <section className="footer_bg">
                <div className="container">
                    <div className="row justify-content-center pt-5">
                        <div className="col-md-6">
                            <div className="footer_heading  text-center">
                                <h2><sup>"</sup>Learn from Yesterday , Live for Today, Hope for Tomorrow<sup>"</sup> <span>___Alvert Einstein</span></h2>
                            </div>
                        </div>


                        <div className="col-md-12 text-center">
                            <div className="footer_bottom">
                                <p>All right reserved by Md Sowrov Khadem</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Footer;