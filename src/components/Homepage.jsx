import "@picocss/pico";
import { Link } from 'react-router-dom';

const Homepage = () => {



  return (
    <>
      <h1>Homepage</h1>

      <div>
        <Link to="/SignUp">
          <button
            type="submit"
            value="signUp"
          >Sign Up</button>
        </Link>
      </div>

      <div>
        <Link to="/Login">
          <button
            type="submit"
            value="login"
          >Login</button>
        </Link>
      </div>

    </>


  );


};

export default Homepage;
