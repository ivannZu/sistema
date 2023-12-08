import * as React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import './SesionesProgramadas.css';

const ProgramarSesion = ({ onSchedule, onClear, isSessionScheduled, sessionDetails, handleInputChange }) => {
  return (
    <div className="schedulingForm">
      {/* Aquí agregarías los inputs para el título, fecha y hora de inicio, y los botones para programar/limpiar la sesión */}
      {/* Ejemplo de input: */}
      {/* <input type="text" name="title" value={sessionDetails.title} onChange={handleInputChange} /> */}
      {/* Asegúrate de agregar inputs similares para date y startTime */}
      {/* Botones para programar y limpiar */}
      {/* <button onClick={onSchedule}>Programar</button> */}
      {/* <button onClick={onClear}>Limpiar</button> */}
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
      </>
    )}
  </div>
);

export default function SesionesProgramadas() {
  const [scheduledSession, setScheduledSession] = React.useState(
    JSON.parse(localStorage.getItem('scheduledSession')) || null
  );
  const [sessionDetails, setSessionDetails] = React.useState({
    title: '',
    date: '',
    startTime: '',
  });
  const [uploadedFiles, setUploadedFiles] = React.useState([]);

  React.useEffect(() => {
    if (scheduledSession) {
      const storedFiles = JSON.parse(localStorage.getItem('uploadedFiles'));
      if (storedFiles) {
        setUploadedFiles(storedFiles);
      }
    } else {
      setUploadedFiles([]);
    }
  }, [scheduledSession]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSessionDetails(prevDetails => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleSchedule = () => {
    setScheduledSession(sessionDetails);
    localStorage.setItem('scheduledSession', JSON.stringify(sessionDetails));
    setUploadedFiles([]);
    localStorage.removeItem('uploadedFiles');
  };

  const handleClear = () => {
    setScheduledSession(null);
    setUploadedFiles([]);
    localStorage.removeItem('scheduledSession');
    localStorage.removeItem('uploadedFiles');
  };

  const handleFileUpload = (event) => {
    const files = event.target.files;
    if (files.length) {
      const newFileNames = Array.from(files).map(file => file.name);
      const updatedFiles = [...uploadedFiles, ...newFileNames];
      setUploadedFiles(updatedFiles);
      localStorage.setItem('uploadedFiles', JSON.stringify(updatedFiles));
    }
  };

  const isSessionScheduled = Boolean(scheduledSession);



  const handleDeleteFiles = () => {
    setUploadedFiles([]);
    localStorage.removeItem('uploadedFiles');
  };
  return (
    <Box sx={{ maxWidth: 900, margin: 'auto', mt: 4 }}>
      <Box sx={{ p: 3, border: '1px solid #ddd', borderRadius: '4px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
        <Typography variant="h6" mb={2}>
          Panel de Reuniones
        </Typography>
        <ProgramarSesion
          onSchedule={handleSchedule}
          onClear={handleClear}
          isSessionScheduled={isSessionScheduled}
          sessionDetails={sessionDetails}
          handleInputChange={handleInputChange}
        />
        {isSessionScheduled && (
          <>
            <SesionesProgramadasInfo scheduledSession={scheduledSession} />
            
            <input
              type="file"
              multiple
              onChange={handleFileUpload}
              style={{
                marginTop: '10px',
                backgroundColor: '#6A0F49', // Cambia el color de fondo según tus preferencias
                color: 'white', // Cambia el color del texto según tus preferencias
                padding: '10px 20px', // Ajusta el espaciado interno del botón
                borderRadius: '5px', // Agrega bordes redondeados para un aspecto más agradable
                border: 'none', // Elimina el borde
                cursor: 'pointer', // Cambia el cursor al pasar sobre el botón
              }}
            />

            {uploadedFiles.length > 0 && (
              <div style={{ marginTop: '20px' }}>
                <Typography variant="h6">Archivos Subidos:</Typography>
                <ul>
                  {uploadedFiles.map((fileName, index) => (
                    <li key={index}>{fileName}</li>
                  ))}
                </ul>
                {/* Botón para borrar los archivos subidos */}
                <button
  onClick={handleDeleteFiles}
  style={{
    marginTop: '10px',
    backgroundColor: '#6A0F49', // Cambia el color de fondo según tus preferencias
    color: 'white', // Cambia el color del texto según tus preferencias
    padding: '10px 20px', // Ajusta el espaciado interno del botón
    borderRadius: '5px', // Agrega bordes redondeados para un aspecto más agradable
    border: 'none', // Elimina el borde
    cursor: 'pointer', // Cambia el cursor al pasar sobre el botón
  }}
>
  Subir archivos
</button>

              </div>
            )}
          </>
        )}
      </Box>
    </Box>
  );
}
