import React from 'react';
import './TimelineEvent.css';
import Timestamp from './Timestamp';
// import testEvent from '../App'

const TimelineEvent = (props) => {
  return (
  <div className='timeline-event'>
      <p className='event-person'>{props.person}</p>
      <p classname='event-status'>{props.status}</p>
      <p classname='event-time'><Timestamp time = {props.timeStamp} /></p>
  </div>
  )
}

export default TimelineEvent;