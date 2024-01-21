import React from 'react';
import RedirectButton from './RedirectButton.tsx';

export default function MainStudySpace(props) {
  return (
    <div className="studySpaceContainer">
        <img src={props.img}/>
        <div>
            <h4>{props.name}</h4>
            <p>{props.desc}</p>
        </div>
        <RedirectButton path='/view-building' text="Go"/>
    </div>
  );
}
