import React from "react";
import NewFile from '/NewFile'
import "./card.css";


const Card =(props)=>{
    return(
        <>
           
                <div>
                <h2 >{props.title}</h2>
                <h2>{props.content}</h2>
                <img src={props.img} alt="propps.content" />
                </div>
        </>
    )
}
export default Card;