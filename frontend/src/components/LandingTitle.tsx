import React from 'react';

export default function LandingTitle(props) {
  return (
    <div className="landingTitle">
      <span>
        <h1>{props.title}</h1>
        <h1 className="orange-text">{props.orangeTitle}</h1>
      </span>
      <p>{props.desc}</p>
    </div>
  );
}
