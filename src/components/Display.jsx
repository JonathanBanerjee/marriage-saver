const Display = () => {
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

export default Display;
