import React from 'react';

export default function MainStudySpace(props) {
  return (
    <div className="studySpaceContainer">
        <img src={props.src}/>
        <h4>{props.name}</h4>
        <p>{props.desc}</p>
        <button>Go</button>
      <p>{props.desc}</p>
    </div>
  );
}
