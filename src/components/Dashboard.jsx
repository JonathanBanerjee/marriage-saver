import React, { Component, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { supabase } from "./auth/supabaseClient";

import DatesList from "./DatesList";

function Dashboard({ session }) {
  const [dates, setdates] = useState([]);
  const getData = async () => {
    let { data: dates, error } = await supabase.from("dates").select("*");
    setdates(dates);
  };
  useEffect(() => {
    console.log("this ran");
    getData();
  }, []);

  return (
    <>
      Dashboard
      <DatesList dates={dates}></DatesList>
      <div>
        <Link to="/NewEvent">
          <button type="submit" value="toNewEvent">
            Add another event
          </button>
        </Link>
      </div>
    </>
  );
}

export default Dashboard;
