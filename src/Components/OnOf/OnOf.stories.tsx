import React, {useState} from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1;
import { action } from '@storybook/addon-actions';
import { Story, Meta } from '@storybook/react/types-6-0';
import OnOf, {OnPropsType} from "./OnOf";





export default {
    title:'OnOf stories',
    component:OnOf
} as Meta;

const Template: Story<OnPropsType> = (args) => <OnOf {...args} />

export const OffMode = ()=> <OnOf on={false} onChange={action("action")} />
export const OnMode = ()=> <OnOf on={true} onChange={action("action")} />


export const ChangeMode = ()=> {
    const[value, setVale]=useState<boolean>(true)
    return <OnOf on={value} onChange={setVale}/>
}