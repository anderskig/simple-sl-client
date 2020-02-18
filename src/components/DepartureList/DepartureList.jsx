import React from 'react';
import './DepartureList.css';
import moment from 'moment';

const isNotRealtime = displayTime => displayTime.includes(':');
const isNow = displayTime => displayTime === 'Nu';

function timeString(displayTime) {
  if (isNotRealtime(displayTime)) {
    return (
      <span>
        {' '}
        enligt tidtabell <b>{displayTime}</b>
      </span>
    );
  }
  if (isNow(displayTime)) {
    return (
      <span>
        {' '}
        går <b>nu</b>
      </span>
    );
  }
  return (
    <span>
      {' '}
      om <b>{displayTime}</b>
    </span>
  );
}

function timeToDeparture(displayTime) {
  if (isNotRealtime(displayTime)) {
    //use moment
    const departureTime = moment(displayTime, 'HH:mm');
    const now = moment();
    const diff = departureTime.diff(now, 'minutes');
    return diff;
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
  return minutesToDeparture - timeToWalk >= 0;
}

function getIconSuffix(transportMode) {
  if (transportMode === 'BUS') {
    return 'bus-alt';
  } else if (transportMode === 'TRAM') {
    return 'subway';
  } else if (transportMode === 'TRAIN') {
    return 'train';
  }
}

function DepartureList(props) {
  const { showDestination, showCantCatch, list, timeToWalk } = props;
  const canCatchList = showCantCatch
    ? list
    : list.filter(departure => canCatch(departure, timeToWalk));
  const sortedList = canCatchList.sort(
    (a, b) => timeToDeparture(a.DisplayTime) - timeToDeparture(b.DisplayTime),
  );
  return (
    <div className="DepartureList">
      {sortedList.map((departure, index) => (
        <div key={index}>
          <i className={'fad fa-' + getIconSuffix(departure.TransportMode)}></i>
          <span>
            <b>{departure.LineNumber}</b>{' '}
            {showDestination ? '(' + departure.Destination + ')' : ''}
          </span>
          {timeString(departure.DisplayTime)}
        </div>
      ))}
    </div>
  );
}

export default DepartureList;
