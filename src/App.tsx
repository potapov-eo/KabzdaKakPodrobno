import React, {useState} from 'react';
import './App.css';
import Accordion from './Components/Accordion/Accordion';
import {Rating, RatingValueType} from './Components/Rating/Rating';
import OnOf from './Components/OnOf/OnOf';
import UnControlledAccordion from './Components/UnControlledAccordion/UnControlledAccordion';
import UnControlledRating from './Components/UnControlledRating/UnControledRating';



function App() {
    let [ratingValue, setRatingValue]= useState<RatingValueType>(1)
    let [acordionCollapsed, setAcordionCollapsed]= useState<boolean>(true)
    let [switchOn, setswitchOn]= useState<boolean>(true)
    return (
        <div className="App">
          {/*  <OnOf on={switchOn}
                  onChange={(on)=>{setswitchOn(on)}}/>*/}
            {/*<OnOf />
            <OnOf/>
            <OnOf/>
            <UnControlledAccordion title={"Accordion title 1"}/>
            <UnControlledAccordion title={"Accordion title 2"}/>*/}

            <Rating value = {ratingValue} onClick={setRatingValue} />
{/*
            <Accordion title={"Accordion title 2"} collapsed ={acordionCollapsed} onChange={()=>{setAcordionCollapsed(!acordionCollapsed)} }/>
*/}

          {/*  <AncontrolledOnOf onChange={setswitchOn}/>{switchOn.toString()}*/}
            {/*  <AppTitle/>

            <Rating value = {3}/>
            <Accordion title={"Accordion title 1"} collapsed ={true}/>
            <Accordion title={"Accordion title 2"} collapsed ={false}/>
            Article 2
            <Rating value = {0}/>
            <Rating value = {1}/>
            <Rating value = {2}/>
            <Rating value = {3}/>
            <Rating value = {4}/>
            <Rating value = {5}/>*/}
        </div>
    );
}



/*function AppTitle(){
    return <>This is App component</>
}*/

export default App;
