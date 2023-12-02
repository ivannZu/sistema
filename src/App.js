// En el componente App
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import Header from "./components/Header";

function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);

  // Check for login state in localStorage on component mount
  useEffect(() => {
    const storedLoginState = localStorage.getItem("isLoggedIn");
    if (storedLoginState === "true") {
      setLoggedIn(true);
    }
  }, []);

  // Función para manejar el cierre de sesión
  const handleLogout = () => {
    // Realiza cualquier lógica de cierre de sesión necesaria
    // Por ejemplo, limpiar el token, restablecer el estado, etc.

    // Actualiza el estado y el localStorage para indicar que el usuario está desconectado
    setLoggedIn(false);
    localStorage.setItem("isLoggedIn", "false");
  };

  return (
    <Router>
      <div>
        {isLoggedIn ? (
          <div>
            <Header onLogout={handleLogout} />
            <Dashboard />
          </div>
        ) : (
          <Login onLogin={() => setLoggedIn(true)} />
        )}
      </div>
    </Router>
  );
}

export default App;
