import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1;
import { action } from '@storybook/addon-actions';
import { Story, Meta } from '@storybook/react/types-6-0';
import {Rating, RatingValueType} from "./Rating";
import {Button, ButtonProps} from "../../stories/Button";

type RatingPropsType= {
    value:number
    onClick:()=>void
}

export default {
    title:'Rating staries',
    component:Rating
} as Meta;

const Template: Story<RatingPropsType> = (args) => <Rating {...args} />

export const Emptystars = ()=> <Rating value={0} onClick={x=>x} />
export const Rating1 = ()=> <Rating value={1} onClick={x=>x} />
export const Rating2 = ()=> <Rating value={2} onClick={x=>x} />
export const Rating3 = ()=><Rating value={3} onClick={x=>x} />
export const Rating4 = ()=><Rating value={4} onClick={x=>x} />
export const Rating5 = ()=><Rating value={5} onClick={x=>x} />
