import React from 'react';
import './ContentBox.css';

function ContentBox(props) {
  return (
  <div className="ContentBox">{props.children}</div>
  )
}

export default ContentBox;
