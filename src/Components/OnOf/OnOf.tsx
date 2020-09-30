import React, {useState} from 'react';
import App from '../../App';


type OnPropsType = {
   /* on: boolean*/
    on:boolean
    onChange:(on:boolean)=>void
}


function OnOf(props: OnPropsType) {

    let[on, setOn] = useState(false)

    const indicatorStyle = {
        width: "10px",
        height: "10px",
        borderRadius: "5px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "5px",
        backgroundColor: props.on ? "green" : "red"
    }
    const onstyle = {
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display: "inline-block",
        padding: "2px",
        backgroundColor: props.on ? "green" : "white"


    }
    const ofstyle = {
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "5px",
        padding: "2px",
        backgroundColor: props.on ? "white" : "red"

    }


    return (
        <div>
            <div style={onstyle} onClick={ () => {props.onChange(true)}}> ON</div>
            <div style={ofstyle} onClick={ () => {props.onChange(false)}}> OFF</div>
            <div style={indicatorStyle}></div>
        </div>
    )
}

/*
<div style="float: left; width: 100px; height: 100px;">content</div>*/
export default OnOf;