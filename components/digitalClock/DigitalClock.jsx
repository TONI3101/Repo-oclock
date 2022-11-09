import React, { useEffect } from 'react'
import { useState } from 'react';
import "./style.scss"

const DigitalClock = () => {
    const [clockTime, setClockTime] = useState();
    useEffect(() => {
        setInterval(() => {
            const date = new Date();
            setClockTime(date.toLocaleTimeString());
        }, 1000);
    }, [])
  return (
    <div>{clockTime}</div>
  )
}

export default DigitalClock