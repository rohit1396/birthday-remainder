import React, { useState } from "react";
import "./App.css";
import data from "./data";
import List from "./List";

function App() {
  const [userData, setUserData] = useState(data);
  console.log(userData);

  const clearBirthdays = () => {
    setUserData([]);
  };

  return (
    <div className="App">
      <h3>{userData.length} birthdays today</h3>
      <List userData={userData} />
      <button onClick={clearBirthdays}>Clear All</button>
    </div>
  );
}

export default App;
