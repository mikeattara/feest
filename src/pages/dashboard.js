import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchEvents } from "store/events/eventsActions";
import { userSelector } from "store/currentUser/currentUserSelectors";

const Dashboard = () => {
  const dispatch = useDispatch();
  const events = useSelector(state => state.events);
  const { id, token } = useSelector(userSelector);

  useEffect(() => {
    dispatch(fetchEvents());
  }, []);

  return (
    <div>
      <h1>WELCOME TO THE DASHBOARD</h1>
      <p>{JSON.stringify(events)}</p>
      <p>Token: {token}</p>
      <p>ID: {JSON.stringify(id)}</p>
    </div>
  );
};

export default Dashboard;
