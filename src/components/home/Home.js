import React, { Component } from 'react'
import './home.css';

class home extends Component {
    render() {
        return (
            <section>
                <div className="profile_main">
                    <div className="profile_image"  style={{ backgroundImage: `url(${require("./images/antu.jpg")})` }}>
                        
                                <div className="profile_content_main">
                                <div className="row justify-content-center">

                                <div className="container">
                                    <div className="profile_content">
                                        <div className="inner_content">
                                            <h2>Md Sowrov Khadem</h2>
                                            <h5>Software Engineer</h5>
                                        </div>

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

export default home
