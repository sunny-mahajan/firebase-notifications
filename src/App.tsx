import React from "react";
import NotificationComponent from "./components/Notification";
import AddNotification from "./components/AddNotification";
import "./App.css"; // Create and style as needed

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Notification App</h1>
        <NotificationComponent />
      </header>

      <main className="App-main">
        <AddNotification />
      </main>
    </div>
  );
};

export default App;
