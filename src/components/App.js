import React, { useReducer, useEffect } from "react";

import "bootstrap/dist/css/bootstrap.min.css";

import EventForm from "./EventForm";
import Events from "./Events";
import AppContext from "../contexts/AppContext";
import reducer from "../reducers";
import OperationLogs from "./OperationLogs";

const APP_KEY = "appWithRedux";

const App = () => {
  const appState = localStorage.getItem(APP_KEY);
  const initialState = JSON.parse(appState)
    ? appState
    : {
        events: [],
        operationLogs: [],
      };
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    // ↓文字列化させる
    const string = JSON.stringify(state);
    console.log({ string });
    localStorage.setItem(APP_KEY, JSON.stringify(state));
  }, [state]);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <div className="container-fluid">
        <EventForm />
        <Events />
        <OperationLogs />
      </div>
    </AppContext.Provider>
  );
};

export default App;
