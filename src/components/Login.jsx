import "@picocss/pico";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { supabase } from "./auth/supabaseClient";

const Login = () => {
  const schema = yup.object().shape({
    email: yup.string().email().required(),
  });

  const {
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    console.log(data);
    const { data: response, error } = await supabase.auth.signInWithOtp({
      email: data.email,
      // options: {
      //   emailRedirectTo: "https://example.com/welcome",
      // },
    });
    console.log(data, response);
  };

  return (
    <>
      <h2>Login</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          aria-label="Email"
          autoComplete="email"
        ></input>
        <p>{errors.email?.message}</p>
        <input type="submit" value="Login" />
      </form>
    </>
  );
};

export default Login;
