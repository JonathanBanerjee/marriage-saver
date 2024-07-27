import React, { Component, useEffect } from "react";

import { supabase } from "./auth/supabaseClient";

import DatesList from "./DatesList";

const sampleData = [
  {
    created_at: "2024-07-27T08:39:48.380147+00:00",
    date: "2024-07-27",
    event_desc: null,
    event_label: "ANNIVERSARY",
    event_person: null,
    id: 1,
    reminder: "2024-07-27T10:39:33+00:00",
    user_id: null,
  },
];

function Dashboard({ session }) {
  const getData = async () => {
    let { data: dates, error } = await supabase.from("dates").select("*");
    console.log(dates);
    console.log(session);
  };
  useEffect(() => {
    console.log("this ran");
    getData();
  }, []);

  return (
    <>
      Dashboard<DatesList></DatesList>
    </>
  );
}

export default Dashboard;
