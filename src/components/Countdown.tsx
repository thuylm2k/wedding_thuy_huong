import { Allison } from "next/font/google";
import "../assets/styles/count_down.scss";
import React, { useEffect, useState } from "react";

const allison = Allison({
  weight: ["400", "400"],
  subsets: ["latin"],
});

type Timer = {
  day: number | string;
  hour: number | string;
  min: number | string;
  sec: number | string;
};

const Countdown = () => {
  const countDownDate = new Date("12/31/2023").getTime();
  const [timer, setTimer] = useState<Timer>({
    day: 0,
    hour: 0,
    min: 0,
    sec: 0,
  });

  useEffect(() => {
    setInterval(() => {
      getTimer();
    }, 1000);
  }, []);

  const getTimer = () => {
    const nowDate = new Date().getTime();
    const distance = countDownDate - nowDate;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    setTimer({
      day: formatTimer(days),
      hour: formatTimer(hours),
      min: formatTimer(minutes),
      sec: formatTimer(seconds),
    });
  };

  const formatTimer = (val: number) => {
    const time = val.toString();
    if (time.length < 2) {
      return `${0}${time}`;
    }
    return time;
  };

  return (
    <div id="count_down" className={allison.className}>
      {/* Day */}
      <div className="clock">
        <div
          className="digital"
          style={
            {
              "--bgr": "#ffabb2",
              "--clr": "#ffe0e2",
              "--clr2": "#d44e5e",
            } as React.CSSProperties
          }
        >
          <div className="screen" data-text="Ngày">
            <div className="time">
              <div id="day">{timer.day}</div>
            </div>
          </div>
        </div>
        {/* Hour */}
        <div
          className="digital"
          style={
            {
              "--bgr": "#ffb6bc",
              "--clr": "#ffd4d6",
              "--clr2": "#ff7d07",
            } as React.CSSProperties
          }
        >
          <div className="screen" data-text="Giờ">
            <div className="time">
              <div id="hour">{timer.hour}</div>
            </div>
          </div>
        </div>
        {/* Min */}
        <div
          className="digital"
          style={
            {
              "--bgr": "#ffd4d6",
              "--clr": "#ffb6bc",
              "--clr2": "#ff2972",
            } as React.CSSProperties
          }
        >
          <div className="screen" data-text="Phút">
            <div className="time">
              <div id="minutes">{timer.min}</div>
            </div>
          </div>
        </div>

        {/* Sec */}
        <div
          className="digital"
          style={
            {
              "--bgr": "#ffe0e2 ",
              "--clr": "#ffabb2",
              "--clr2": "#fff2f2",
            } as React.CSSProperties
          }
        >
          <div className="screen" data-text="Giây">
            <div className="time">
              <div id="seconds">{timer.sec}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Countdown;
