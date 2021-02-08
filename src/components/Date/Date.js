import React from 'react'

import './date.css'
import calendar from './calendar.png'

export function Date({date}) {
  return (
    <div className="MyDate"><img src={calendar} /> Last edited: <span>{date}</span></div>
  )
}
