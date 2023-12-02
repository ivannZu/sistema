import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import './SesionesProgramadas.css';
import SesionProgreso from './SesionProgreso'; 
const ProgramarSesion = ({ onSchedule, onClear, isSessionScheduled }) => {
  const [sessionDetails, setSessionDetails] = React.useState({
    title: '',
    date: '',
    startTime: '', // Nueva propiedad para la hora de inicio
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSessionDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleSchedule = () => {
    if (!isSessionScheduled) {
      // Lógica simple para generar el enlace de Google Meet
      const googleMeetLink = `https://meet.google.com/${Math.random().toString(36).substring(2, 10)}`;

      // Establecer la sesión programada y el enlace
      setSessionDetails({ ...sessionDetails, googleMeetLink });
      onSchedule({ ...sessionDetails, googleMeetLink });

      // Guardar en local storage
      localStorage.setItem('scheduledSession', JSON.stringify({ ...sessionDetails, googleMeetLink }));

      // Abrir el enlace de Google Meet en una nueva pestaña
      window.open(googleMeetLink, '_blank');
    }
  };

  const handleClear = () => {
    // Limpiar la sesión programada
    setSessionDetails({
      title: '',
      date: '',
      startTime: '',
    });
    onClear();

    // Eliminar del local storage
    localStorage.removeItem('scheduledSession');
  };

  return (
    <div className="schedulingForm">
      <input
        type="text"
        name="title"
        placeholder="Título de la Sesión"
        onChange={handleInputChange}
        disabled={isSessionScheduled}
        value={sessionDetails.title}
      />
      <input
        type="date"
        name="date"
        onChange={handleInputChange}
        disabled={isSessionScheduled}
        value={sessionDetails.date}
      />
      <input
        type="time" // Nuevo campo para la hora de inicio
        name="startTime"
        onChange={handleInputChange}
        disabled={isSessionScheduled}
        value={sessionDetails.startTime}
      />
      <Button
        variant="contained"
        onClick={handleSchedule}
        disabled={isSessionScheduled}
      >
        Programar Sesión
      </Button>
      {isSessionScheduled && (
        <Button variant="contained" color="secondary" onClick={handleClear}>
          Borrar Sesión
        </Button>
      )}
    </div>
  );
};

const SesionesProgramadasInfo = ({ scheduledSession }) => (
  <div className="scheduledSessionInfo">
    <Typography variant="body1">Información de Sesiones Programadas</Typography>
    {scheduledSession && (
      <>
        <Typography variant="body1">Título: {scheduledSession.title}</Typography>
        <Typography variant="body1">Fecha: {scheduledSession.date}</Typography>
        <Typography variant="body1">Hora de inicio: {scheduledSession.startTime}</Typography>
        <Typography variant="body1">Enlace Google Meet: {scheduledSession.googleMeetLink}</Typography>
      </>
    )}
  </div>
);

export default function SesionesProgramadas() {
  const [value, setValue] = React.useState(0);
  const [scheduledSession, setScheduledSession] = React.useState(
    JSON.parse(localStorage.getItem('scheduledSession')) || null
  );

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleSchedule = (sessionDetails) => {
    setScheduledSession(sessionDetails);
  };

  const handleClear = () => {
    setScheduledSession(null);
    localStorage.removeItem('scheduledSession');
  };

  const isSessionScheduled = Boolean(scheduledSession);

  return (
    <Box sx={{ maxWidth: 900, margin: 'auto', mt: 4 }}>
      <Box sx={{ p: 3, border: '1px solid #ddd', borderRadius: '4px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
        <Typography variant="h6" mb={2}>
          Programar Sesión
        </Typography>
        <ProgramarSesion
          onSchedule={handleSchedule}
          onClear={handleClear}
          isSessionScheduled={isSessionScheduled}
        />
        {isSessionScheduled && (
          <>
            <Typography variant="h6" mt={4}>
              Sesión Programada
            </Typography>
            <SesionesProgramadasInfo scheduledSession={scheduledSession} />
          </>
        )}
      </Box>
    </Box>
  );
}
