import React, { useState, useEffect } from 'react';
import logo from '../assets/img/EscudoMichoacanHorizontal6.png';


const Header = ({ onLogout }) => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    'SISOGEM4.png',
    // Agrega más nombres de imágenes según sea necesario
  ];


  

  const headerStyle = {
    backgroundImage: `url(${require(`../assets/img/${images[currentImage]}`)})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    color: 'white',
    padding: '1em',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height:'150px',
    width:'100%',
  };

  const logoStyle = {
    width: '500px',
    height: '120px',
    marginRight: '1em',
  };

  const textContainerStyle = {
    flex: 1,
  };

  const titleStyle = {
    fontSize: '1.5em',
    margin: 0,
  };

  const navigationStyle = {
    listStyle: 'none',
    display: 'flex',
    margin: 0,
    padding: 0,
  };

  const listItemStyle = {
    margin: '0 10px',
    fontSize: '1em',
  };

  
  const logoutButtonStyle = {
    backgroundColor: '#9f9f9f', // Color de fondo
    color: 'white',             // Color del texto
    border: 'none',
    borderRadius: '5px',        // Esquinas redondeadas
    padding: '10px 20px',       // Padding
    margin: '10px',             // Margin
    fontSize: '1em',            // Tamaño de fuente
    boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)', // Sombra
    transition: '0.3s',        // Transición suave
  };
  

  // Función para cambiar la imagen actual
  const changeImage = () => {
    setCurrentImage((prevImage) => (prevImage + 1) % images.length);
  };

  // Efecto para cambiar la imagen cada 5 segundos
  useEffect(() => {
    const intervalId = setInterval(changeImage, 5000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <header style={headerStyle}>
      <div>
        <img src={logo} alt="Escudo del Estado de Michoacán" style={logoStyle} />
      </div>
      <div style={textContainerStyle}>
        
        <p style={titleStyle}>
          {/* Add your title content here */}
        </p>
      </div>
       <nav>
       <ul style={navigationStyle}>
         <li style={listItemStyle}></li>
          
          <li style={listItemStyle}></li>
        </ul>
      </nav>


      <button onClick={onLogout} style={logoutButtonStyle}>Cerrar sesión</button>
    </header>
  );
};

export default Header;
