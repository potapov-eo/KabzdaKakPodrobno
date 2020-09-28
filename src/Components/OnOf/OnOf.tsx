import React, {useState} from 'react';
import App from '../../App';


type OnPropsType = {
   /* on: boolean*/
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
        backgroundColor: on ? "green" : "red"
    }
    const onstyle = {
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display: "inline-block",
        padding: "2px",
        backgroundColor: on ? "green" : "white"


    }
    const ofstyle = {
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "5px",
        padding: "2px",
        backgroundColor: on ? "white" : "red"

    }


    return (
        <div>
            <div style={onstyle} onClick={ () => {setOn(true)}}> ON</div>
            <div style={ofstyle} onClick={ () => {setOn(false)}}> OFF</div>
            <div style={indicatorStyle}></div>
        </div>
    )
}

/*
<div style="float: left; width: 100px; height: 100px;">content</div>*/
export default OnOf;