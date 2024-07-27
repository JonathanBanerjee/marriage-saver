import "@picocss/pico";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const Login = () => {
  const schema = yup.object().shape({
    email: yup.string().email().required(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
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
          {...register("email")}
        ></input>
        <p>{errors.email?.message}</p>
        <input type="submit" value="Login"/>
      </form>
    </>
  );
};

export default Login;
