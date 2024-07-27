import "@picocss/pico";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const SignUp = () => {
  const schema = yup.object().shape({
    name: yup.string().required("Your full name is required"),
    email: yup.string().email().required(),
    // password: yup.string().min(4).max(20).required(),
    // confirmPassword: yup.string().oneOf([yup.ref("password"), null], "Passwords don't match")
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    console.log(data);
    // const { data, error } = await supabase.auth.signUp({
    //   email: "example@email.com",
    //   password: "example-password",
    // });
  };
  return (
    <>
      <h2>Sign Up Page</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <fieldset>
          <label>
            Name
            <input
              type="text"
              name="name"
              placeholder="Your Name..."
              {...register("name")}
            />
            <p>{errors.name?.message}</p>
          </label>
          <label>
            Email
            <input
              type="email"
              name="email"
              placeholder="Your Email..."
              {...register("email")}
            />
            <p>{errors.email?.message}</p>
          </label>
        </fieldset>

        <input type="submit" value="Sign Up" />
      </form>
    </>
  );
};

export default SignUp;
