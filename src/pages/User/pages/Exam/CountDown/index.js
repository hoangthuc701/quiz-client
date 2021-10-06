import React, { useState, useEffect } from "react";
import "./style.css";

function CountDown(props) {
   const { time, start, callBack } = props;
   const [timeValue, setTimeValue] = useState(time * 60);
   const [isTimeOut, setIsTimeOut] = useState(false);

   useEffect(() => {
      if (start) {
         const interval = setInterval(() => {
            setTimeValue((timeValue) => {
               if (timeValue > 0) {
                  return timeValue - 1;
               } else {
                  setIsTimeOut(true);
                  clearInterval(interval);
                  return 0;
               }
            });
         }, 1000);
         return () => clearInterval(interval);
      }
   }, [start]);

   useEffect(() => {
      if (isTimeOut) {
         callBack();
      }
   }, [isTimeOut, callBack]);

   return (
      <div className={timeValue < 60 ? "red" : ""}>
         <span>
            {Math.floor(timeValue / 60) !== 0
               ? Math.floor(timeValue / 60)
               : "00"}
         </span>
         :<span>{(timeValue % 60).toString().padStart(2, "0")}</span>
      </div>
   );
}

export default CountDown;
