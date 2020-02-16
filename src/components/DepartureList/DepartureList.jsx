import React from 'react';

function timeString(displayTime) {
  if (displayTime.includes(':')) {
    return (<span> <b>{displayTime}</b> enligt tidtabell</span>);
  }
  if (displayTime === 'Nu') {
    return (<span> går <b>nu</b></span>);
  }
  return (<span> om <b>{displayTime}</b></span>);
}

function DepartureList(props) {
  return (
    <div>
      {props.list.map((departure, index) =>
      (<div key={index}>
        <span><b>{departure.LineNumber}</b> ({departure.Destination})</span>
        {timeString(departure.DisplayTime)}
      </div>)
      )}
    </div>
  )
}

export default DepartureList;
