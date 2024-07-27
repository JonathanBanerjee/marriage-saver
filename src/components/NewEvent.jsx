import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { supabase } from "./auth/supabaseClient";

const NewEvent = () => {
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

  const onSubmit = async (data) => {
    console.log(data);
    const { data: response, error } = await supabase.auth.signInWithOtp({
      email: data.email,
      options: {
        emailRedirectTo: "/dashboard",
      },
    });
    console.log(error, response);
  };

  return (
    <>
      <h2>Log an event</h2>
      <form>
        <fieldset>
          <input
            name="recipient"
            placeholder="Recipient"
            autoComplete="event"
          />
          <input name="event" placeholder="Event" autoComplete="event" />
          <input
            name="description"
            placeholder="Description"
            autoComplete="Description"
          />
          <input type="date" />
          <input type="submit" value="Add Event" />
        </fieldset>
      </form>
    </>
  );
};

export default NewEvent;
