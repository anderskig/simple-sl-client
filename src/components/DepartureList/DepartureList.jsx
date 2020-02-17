import React from 'react';

const isNotRealtime = displayTime => displayTime.includes(':');
const isNow = displayTime => displayTime === 'Nu';

function timeString(displayTime) {
  if (isNotRealtime(displayTime)) {
    return (<span> enligt tidtabell <b>{displayTime}</b></span>);
  }
  if (isNow(displayTime)) {
    return (<span> går <b>nu</b></span>);
  }
  return (<span> om <b>{displayTime}</b></span>);
}

function timeToDeparture(displayTime) {
  if (isNotRealtime(displayTime)) {
    //use moment
    return 100;
  }
  if (isNow(displayTime)) {
    return 0;
  }
  return displayTime.split(' ')[0];
}

function canCatch(departure, timeToWalk) {
  const minutesToDeparture = timeToDeparture(departure.DisplayTime);
  if (isNaN(timeToWalk)) {
    return true;
  }
  return minutesToDeparture - timeToWalk > 0;
}

function DepartureList(props) {
  const { showDestination, showCantCatch, list, timeToWalk } = props;
  const canCatchList = showCantCatch ? list : list.filter(departure => canCatch(departure, timeToWalk));
  return (
    <div>
      {canCatchList.map((departure, index) =>
      (<div key={index}>
        <span><b>{departure.LineNumber}</b> {showDestination ? '(' + departure.Destination + ')' : ''}</span>
        {timeString(departure.DisplayTime)}
      </div>)
      )}
    </div>
  )
}

export default DepartureList;
