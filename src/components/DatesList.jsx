import "@picocss/pico";
import CountDown from "./CountDown";
import { useState, useEffect } from "react";

const DatesList = ({ dates }) => {
  const [listOfDates, setListOfDates] = useState([]);
  useEffect(() => {
    console.log("Testing dates list");
    dates = dates.sort((a, b) => {
      if (a.date > b.date) {
        return -1;
      } else {
        return 1;
      }
    });
    setListOfDates(dates);
  });

  return (
    <>
      <h1>Dates List</h1>
      <table>
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Date</th>
            <th scope="col">Event</th>
            <th scope="col">Description</th>
            <th scope="col">Time Until</th>
          </tr>
        </thead>
        <tbody>
          {listOfDates.map((date) => {
            return (
              <tr>
                <td>{date.event_person}</td>
                <td>{date.date}</td>
                <td>{date.event_label}</td>
                <td>{date.event_desc}</td>
                <td>
                  <CountDown target={date.date} />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default DatesList;
