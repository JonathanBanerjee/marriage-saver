import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { supabase } from "./auth/supabaseClient";

const NewEvent = ({ session }) => {
  const schema = yup.object().shape({
    event_person: yup.string().required(),
    event_label: yup.string().required(),
    event_desc: yup.string().required(),
    date: yup.date().required(),
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
    data.user_id = session.user.id;
    const { data: response, error } = await supabase
      .from("dates")
      .insert([data])
      .select();
    console.log(error, response);
  };

  return (
    <>
      <h2>Log an event</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <fieldset>
          <input
            name="event_person"
            placeholder="Recipient"
            autoComplete="event"
            {...register("event_person")}
          />
          <p>{errors.event_person?.message}</p>

          <input
            name="event_label"
            placeholder="Event"
            autoComplete="event"
            {...register("event_label")}
          />
          <p>{errors.event_label?.message}</p>
          <input
            name="event_desc"
            placeholder="Description"
            autoComplete="Description"
            {...register("event_desc")}
          />
          <p>{errors.event_desc?.message}</p>

          <input type="date" {...register("date")} />
          <p>{errors.date?.message}</p>

          <input type="submit" value="Add Event" />
        </fieldset>
      </form>
    </>
  );
};

export default NewEvent;
