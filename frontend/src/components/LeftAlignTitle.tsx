import React from 'react';

export default function LeftAlignTitle(props) {
  return (
    <div className="leftAlignTitle">
      <span>
        <h2>{props.title + " "}</h2>
        <h2 className="orange-text">{props.orangeTitle}</h2>
        <h2 className="end-title">{props.endTitle}</h2>
      </span>
      <p>{props.desc}</p>
    </div>
  );
}
