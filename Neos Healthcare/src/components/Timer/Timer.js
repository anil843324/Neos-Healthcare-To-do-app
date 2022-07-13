import React, { useEffect, useState } from 'react'
import "./Timer.css"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Timer3 = () => {


   const [timerOn, setTimerOn] = useState(true)

   const [time, setTime] = useState(120)

   const [toggle, setToogle] = useState(false)

  

   useEffect(() => {

      let interval = null;
      if (timerOn) {
         interval = setInterval(() => {


            setTime((prevt) => prevt > 0 ? prevt - 1 : prevt)



            if (time === 0) {
               clearInterval(interval)
            }


         }, 1000)
      } else if (!timerOn) {
         clearInterval(interval)
      }

      return () => clearInterval(interval)


   }, [timerOn])

   let hours = Math.floor(time / 3600)

   let mins = Math.floor((time - (hours * 3600)) / 60)
   let secs = time % 60;


   const handleCheck = () => {

      if (time > 0) {
         setToogle(true)
         toast.success(' Task completed !', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
      }



   }
    if (time === 0 && toggle === false) {

      toast.error('Task Not completed !', {
         position: "top-right",
         autoClose: 5000,
         hideProgressBar: false,
         closeOnClick: true,
         pauseOnHover: true,
         draggable: true,
         progress: undefined,
         });
      
    }

   console.log(time)


   return (
      <>
         <div className='timercheckboxdiv' >

            <h4>
               <span> {(mins) < 10 ? ("0" + mins) : (mins)} :</span>
               <span> {(secs) < 10 ? ("0" + secs) : (secs)} </span>
            </h4>

            {/* <div>
            <button onClick={() => { setTimerOn(true) }} >Start</button>
            <button onClick={() => { setTimerOn(false) }}>Stop</button>
         </div> */}

            {
               toggle ? <button onClick={() => { handleCheck() }}>Checked</button> : time===0 ?  <button onClick={() => { handleCheck() }}>Failed</button> : <button onClick={() => { handleCheck() }}>Check</button>
            }



         </div>

         <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
         />
         {/* Same as */}
         <ToastContainer />
      </>
   )
}

export default Timer3