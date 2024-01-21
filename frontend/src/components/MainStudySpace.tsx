import React from 'react';

export default function MainStudySpace(props) {
  return (
    <div className="studySpaceContainer">
        <img src={props.img}/>
        <div>
            <h4>{props.name}</h4>
            <p>{props.desc}</p>
        </div>
        <button className="orange-button">Go</button>
    </div>
  );
}
