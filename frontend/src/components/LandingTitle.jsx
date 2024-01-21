import React from 'react';

export default function LandingTitle(props) {
  return (
    <>
      <h1>{props.title}</h1>
      <p>{props.desc}</p>
    </>
  );
}
