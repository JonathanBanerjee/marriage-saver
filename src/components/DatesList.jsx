import "@picocss/pico";
import CountDown from "./CountDown";

const DatesList = ({ dates: listOfDates }) => {
  // const listOfDates = [
  //     {
  //         name: "Sarah",
  //         date: "16-04-1798",
  //         event: "birthday",
  //         description: "anniversary of marriage"
  //     },{
  //         name: "Jamie",
  //         date: "16-04-2001",
  //         event: "wedding",
  //         description: "wedding with Lana"
  //     }
  // ]

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
