import React from 'react'

import { Scheduler } from "@aldabil/react-scheduler";
import RecordEditor from './editor';

function Events() {
  return (
    <div>
        <Scheduler
    view="month"
    customEditor={(scheduler) => <RecordEditor scheduler={scheduler}/>}
  />
  </div>
  )
}

export default Events