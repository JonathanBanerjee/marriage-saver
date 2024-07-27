import "@picocss/pico";

const SignUp = () => {
    const submit = (data) => {
        console.log(data)
    }
  return (
    <>
      <h2>Sign Up Page</h2>
      <form>
        <fieldset>
          <label>
            Name
            <input type="text" name="name" placeholder="Your Name..." />
          </label>
          <label>
            Email
            <input type="email" name="email" placeholder="Your Email..." />
          </label>
        </fieldset>

        <input type="submit" value="Sign Up" />
      </form>
    </>
  );
};

export default SignUp;
