import React, {useState} from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1;
import { action } from '@storybook/addon-actions';
import { Story, Meta } from '@storybook/react/types-6-0';
import Accordion, {AccordionPropsType} from "./Accordion";


export default {
    title:'Accordion stories',
    component:Accordion
} as Meta;

const Template: Story<AccordionPropsType> = (args) => <Accordion {...args} />

export const TwistedAccordion   = ()=> <Accordion title={"Accordion title"} collapsed ={false} onChange={action("action")} />
export const ColapsedAccordion = ()=> <Accordion title={"Accordion title"} collapsed ={true} onChange={action("action")} />


export const ChangeMode = ()=> {
    const[value, setVale]=useState<boolean>(true)
    return <Accordion title={"Accordion title"} collapsed ={value} onChange={()=>setVale(!value)}/>
}