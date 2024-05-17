import React from "react"

export default function Dice(props){
        const styles = 
        {
            backgroundColor: props.isHeld ? "#59E391" : "white"
        }
    return (
        <div 
            className="dice-face"
            onClick = {props.holdDice}
            style = {styles}>
        <h2  className="dice-num">{props.value}</h2>
        </div>
    )
}