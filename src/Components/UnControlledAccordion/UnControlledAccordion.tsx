import React, {useState} from 'react';


export type AccordionPropsType = {
    title: string

}

/*function Accordion(props: AccordionPropsType) {
    if (props.collapsed === true) {
        return <div>
            <AccordionTitle title={props.title}/>

        </div>
    } else return (
        <div>
            <AccordionTitle title={props.title}/>
            <AccordionBody/>
        </div>)
}*/
export function UnControlledAccordion(props: AccordionPropsType) {
    let [collapsed, setCollapsed]= useState(false)

    return (
        <div>
            <AccordionTitle title={props.title} onClick={()=>{setCollapsed(!collapsed)}} />
           {/* <button onClick={()=>{setCollapsed(!collapsed)}}>TOGGLE</button>*/}
            {collapsed&&<AccordionBody/>}
        </div>)
}

export type AccordionTitlePropsType = {
    title: string
    onClick: ()=>void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return <h3 onClick={props.onClick}>{props.title}</h3>
}

function AccordionBody() {
    return <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>
}

