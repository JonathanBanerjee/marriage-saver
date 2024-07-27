import React, { Component, useEffect, useState } from "react";

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
    </>
  );
}

export default Dashboard;
