import React from "react";
import { supabase } from "./auth/supabaseClient";

const Navbar = ({ session }) => {
  const signOut = async () => {
    const { error } = await supabase.auth.signOut();
    console.log(error);
  };
  return (
    <nav>
      <ul>
        <li>
          <strong> &#128141; Marriage Saver</strong>
        </li>
      </ul>
      <ul>
        <li>
          <a href="./">Homepage</a>
        </li>
        {session ? (
          <li>
            <button onClick={signOut}>Sign Out</button>
          </li>
        ) : (
          <li>
            <a href="./Login">Login</a>
          </li>
        )}
        <li>
          <a href="./Dashboard">Dashboard</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
