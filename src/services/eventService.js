export const getEvents = async () => {
  const events = await fetch(
    "https://651d4f3c44e393af2d59879c.mockapi.io/api/events"
  );
  const response = await events.json();
  return response;
};

export const setEvent = async (id) => {
  const getEvents = JSON.parse(localStorage.getItem("myEvents"));
  let events = [];
  if (!getEvents) {
    events.push(id);
    localStorage.setItem("myEvents", JSON.stringify(events));
  } else {
    events = getEvents;
    events.push(id);
    localStorage.setItem("myEvents", JSON.stringify(events));
  }
};

export const getEventFromLocal = async () => {
  return await JSON.parse(localStorage.getItem("myEvents"));
};

export const filterEvents = async () => {
  const eventsList = await getEvents();
  const getEventsLocal = await getEventFromLocal();
  return (
    eventsList.filter((events) => !getEventsLocal?.includes(events.id)) ??
    eventsList
  );
};
