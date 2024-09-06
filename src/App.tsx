import { Outlet } from "react-router-dom";
import AppContext from "./context/appContext";
import Navbar from "@/components/navbar";
import { useEffect, useState } from "react";
import { Toaster } from "@/components/ui/toaster"
import { ErrorDisplay } from "./components/errorDisplay";

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); // New state for error

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message); // Set error message
        setLoading(false);
      });
  }, []);

  return (
    <AppContext.Provider value={{users, loading, error, setUsers}}>
      <Navbar/>
      <Outlet />
      <ErrorDisplay visible={error && true}/>
      <Toaster />
    </AppContext.Provider>
  );
}

export default App;
