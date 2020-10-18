import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import {UnControlledAccordion, AccordionPropsType} from "./UnControlledAccordion";

export default {
    title:'UnControlledAccordion stories',
    component:UnControlledAccordion
} as Meta;

const Template: Story<AccordionPropsType> = (args) => <UnControlledAccordion {...args} />

export const TwistedAccordion   = ()=> <UnControlledAccordion title={"Accordion title"}  />




