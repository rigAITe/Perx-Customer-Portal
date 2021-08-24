import React, { useState, useContext, Children } from "react";
import axios from "axios";
import { LoaderContext } from "./Loading";


export const EventContext = React.createContext();

export function EventContextController({ children }) {
  const { toggleLoading } = useContext(LoaderContext);

  let intialState = { data: null };

  const [events, setEvents] = useState(intialState)

  const getEvents = () => {
    toggleLoading(true);
    axios.get(`catalogue/events`)
      .then(res => {
        toggleLoading(false);
        setEvents({ data: res.data })
      })

  }

  return (
    <EventContext.Provider
      value={{
        events,
        getEvents
      }}>
      {children}
    </EventContext.Provider>
  )
}
