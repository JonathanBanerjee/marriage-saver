import ReactTimeAgo from "react-time-ago";

function CountDown({ target }) {
  return (
    <>
      <div>
        <ReactTimeAgo date={target} locale="en-US" />
      </div>
    </>
  );
}

export default CountDown;
