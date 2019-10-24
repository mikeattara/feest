import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchEvents } from "store/events/eventsActions";

const Dashboard = () => {
  const dispatch = useDispatch();
  const events = useSelector(state => state.events);

  useEffect(() => {
    dispatch(fetchEvents());
  }, []);

  return (
    <div>
      <h1>WELCOME TO THE DASHBOARD</h1>
      <p>{JSON.stringify(events)}</p>
    </div>
  );
};

export default Dashboard;
