import React from 'react';
import logo from './logo.svg';
import './App.css';
import timelineData from './data/timeline.json';
import Timeline from './components/Timeline';
import TimelineEvent from './components/TimelineEvent';

export const testEvent = {
    'person': 'Adele Goldberg',
    'status': 'In Smalltalk, everything happens somewhere else.',
    'timeStamp': '2018-05-18T22:12:03Z'
}

function App() {



  console.log(timelineData);

  // Customize the code below
  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>{timelineData.person}'s Timeline</h1>
      </header>
      <main className='App-main'>
      <Timeline events = {timelineData.events} />
      </main>
    </div>
  );
}

export default App;