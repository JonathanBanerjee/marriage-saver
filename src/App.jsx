import { useState, useEffect } from "react";
import "./css/App.css";

import { Routes, Route } from "react-router-dom";
import Homepage from "./components/Homepage";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Dashboard from "./components/Dashboard";
import Display from "./components/Display.jsx";
import DatesList from "./components/DatesList"



import { supabase } from "./components/auth/supabaseClient.js";
import Navbar from "./components/Navbar.jsx";

function App() {
  const [session, setSession] = useState(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      console.log(session);
    });

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);

  return (
    <>
    <Navbar />
      <Routes>
        <Route path="/" element={<Homepage session={session} />} />
        <Route path="/login" element={<Login session={session} />} />
        <Route path="/signup" element={<SignUp session={session} />} />
        <Route path="/dashboard" element={<Dashboard session={session} />} />
        <Route path="/display" element={<Display session={session} />} />
        <Route path="/dates-list" element={<DatesList session={session} />} />

      </Routes>
    </>
  );
}

export default App;
