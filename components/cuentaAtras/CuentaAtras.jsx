import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

const CuentaAtras = () => {
    const [timeBack, setTimeBack] = useState("");
    useEffect(() => {
        let countDownTime = new Date("24:00:00").getTime();// aqui tambien almacenamos el tiempo
        let x = setInterval(() => {
            let now = new Date().getTime();// now almacena la hora en now
            // let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)); //calcula la distancia 
            // let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            // let seconds = Math.floor((distance % (1000 * 60)) / 1000);
            // setTimeBack( hours + "h " + minutes + "m " + seconds + "s ");
        }, 1000);
    },[]);
  return (

    <div className='countdown'>CuentaAtras</div>
  )
}

export default CuentaAtras;