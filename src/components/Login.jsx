import "@picocss/pico";
const Login = () => {
  return (
    <>
      <h2>Login</h2>
      <form>
        <input
          type="email"
          name="email"
          placeholder="Email"
          aria-label="Email"
          autoComplete="email"
        ></input>
        <input
          type="password"
          name="password"
          placeholder="Password"
          aria-label="Password"
          autoComplete="current-password"
        ></input>
        <input type="submit" value="Login" />
      </form>
    </>
  );
};

export default Login;
