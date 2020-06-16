import React from 'react'
import './card.css'

function Card(props){
    return(
    
               
            <div className="col-md-3 my-3 cards_main">
                <div className="cards">
                    <div className="card">
                        <img src={ props.imgsrc }></img>
                    </div>
                    <div className="card_info">
                            <h4>{props.title}</h4>
                        </div>
                </div>
            </div>
      
    
        
     
        
        
    )
}

export default Card;