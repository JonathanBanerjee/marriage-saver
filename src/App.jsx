import { useState, useEffect } from "react";
import "./css/App.css";

import {
  BrowserRouter,
  Routes,
  Route,
  Outlet,
  redirect,
  Navigate,
} from "react-router-dom";
import Homepage from "./components/Homepage";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Dashboard from "./components/Dashboard";
import Display from "./components/Display.jsx";
import { supabase } from "./components/auth/supabaseClient.js";

function App() {
  const [session, setSession] = useState(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage session={session} />} />
        <Route path="/login" element={<Login session={session} />} />
        <Route path="/signup" element={<SignUp session={session} />} />
        <Route path="/dashboard" element={<Dashboard session={session} />} />
        <Route path="/display" element={<Display session={session} />} />
      </Routes>
    </>
  );
}

export default App;
