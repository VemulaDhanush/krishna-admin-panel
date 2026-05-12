import React, { useState } from "react";
import AdminLogin from "./Components/AdminLogin";
import Dashboard from "./Components/Dashboard";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      {isLoggedIn ? (
        <Dashboard onLogout={() => setIsLoggedIn(false)} />
      ) : (
        <AdminLogin setIsLoggedIn={setIsLoggedIn} />
      )}
    </div>
  );
}

export default App;