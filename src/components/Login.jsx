// Login.js
import React, { useState } from "react";

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Implementa la lógica de inicio de sesión real aquí
    // Por simplicidad, consideremos un nombre de usuario y contraseña codificados
    const validUsername = "admin";
    const validPassword = "admin";

    if (username === validUsername && password === validPassword) {
      // Guarda el estado de inicio de sesión en localStorage
      localStorage.setItem("isLoggedIn", "true");

      // Llama al callback onLogin para indicar un inicio de sesión exitoso
      onLogin();
    } else {
      // Maneja el intento de inicio de sesión inválido
      alert("Credenciales inválidas. Por favor, inténtalo de nuevo.");
    }
  };






  const styles = {
    container: {
      display: "flex",
      flexDirection: "column", // Alinea los elementos en una columna
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      textAlign: "center",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundImage: "url('https://images.unsplash.com/photo-1564163627590-b633e46c3b73')",
    },
    title: {
      color: "#fff",
      fontSize: "42px",
      fontWeight: "bold",
      marginBottom: "20px",
      textAlign: "center"
    },
  
    form: {
      display: "inline-block",
      border: "1px solid #ccc",
      padding: "40px",
      borderRadius: "10px",
      boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)",
      maxWidth: "400px",
      backgroundColor: "#fff",
    },
  
    label: {
      display: "block",
      marginBottom: "15px",
      fontSize: "16px",
      color: "#333",
    },
  
    input: {
      width: "100%",
      padding: "15px",
      marginBottom: "20px",
      boxSizing: "border-box",
      borderRadius: "5px",
      border: "1px solid #ddd",
      fontSize: "14px",
      transition: "border-color 0.3s",
      '&:focus': {
        borderColor: "#4CAF50",
      },
    },
  
    button: {
      width: "100%",
      backgroundColor: "#4CAF50",
      color: "white",
      padding: "15px 20px",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
      fontSize: "16px",
      fontWeight: "bold",
      textTransform: "uppercase",
      transition: "background-color 0.3s",
      '&:hover': {
        backgroundColor: "#45a049",
      },
    },
  
    errorMessage: {
      color: "red",
      marginTop: "10px",
      fontSize: "14px",
    },
  
    link: {
      color: "#007BFF",
      textDecoration: "none",
      cursor: "pointer",
      display: "block",
      marginTop: "20px",
      fontSize: "14px",
      '&:hover': {
        textDecoration: "underline",
      },
    },

    
    
  };
  

  return (
 
  
      
    <div style={styles.container}>
      <h2 style={styles.title}>Inicio de Sesión</h2> {/* Título agregado aquí */}
      <h2>SISOGEM</h2>
      <form style={styles.form}>
        <label style={styles.label}>
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={styles.input}
          />
        </label>
        <br />
        <label style={styles.label}>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={styles.input}
          />
        </label>
        <br />
        <button type="button" onClick={handleLogin} style={styles.button}>
          Iniciar Sesion
        </button>
      </form>
    </div>
  );
};

export default Login;
