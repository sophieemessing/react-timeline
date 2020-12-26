import React from 'react';
import './TimelineEvent.css';
import Timestamp from './Timestamp';
// import testEvent from '../App'

const TimelineEvent = (props) => {
  return (
  <div>
      <p>{props.person}</p>
      <p>{props.status}</p>
      <p>{props.timeStamp}</p>
  </div>
  )
}

export default TimelineEvent;