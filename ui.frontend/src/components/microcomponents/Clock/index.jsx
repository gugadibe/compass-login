import { useEffect, useState } from "react";
import setDayName from '../../../helpers/setDayName';
import setMonthName from "../../../helpers/setMonthName";

export default function Clock() {
  const [time, setTime] = useState();
  const [day, setDay] = useState();

  useEffect(() => {
    setInterval(() => {
      const date = new Date();
      const day = setDayName(date.getDay());
      const month = setMonthName(date.getMonth() + 1);
      const year = date.getFullYear();
      let min = date.getMinutes();
      let hour = date.getHours();

      if (min.toString().length === 1) min = "0" + min;
      if (min.toString().length === 1) hour = "0" + hour;

      const currentTime = `${hour}:${min}`;
      const currentDay = `${day}, ${date.getDate()} de ${month} de ${year}`;

      setTime(currentTime);
      setDay(currentDay);
    }, 1000);
  }, []);

  return (
    <div>
      <span>{time}</span>
      <span>{day}</span>
    </div>
  );
}
