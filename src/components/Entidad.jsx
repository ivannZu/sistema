import React, { useState } from "react";
import {
  Typography,
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Slide,
  Tooltip,
  FormGroup,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import FingerprintIcon from "@mui/icons-material/Fingerprint";
import DoneIcon from "@mui/icons-material/Done";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Entidad = () => {


  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
    const loggedInUser = localStorage.getItem("loggedInUser");
  const [organismo, setOrganismo] = useState("");
  const [openDialog, setOpenDialog] = useState(false);
  const [confirmed, setConfirmed] = useState(false);
  const [selectedDocuments, setSelectedDocuments] = useState([]);

  const handleCloseDialog = () => {
    if (confirmed) {
      setTimeout(() => {
        setOpenDialog(false);
      }, 1000);
    } else {
      setOpenDialog(false);
    }
  };

  const handleDocumentSelection = (document) => {
    const isSelected = selectedDocuments.includes(document);
    if (isSelected) {
      setSelectedDocuments(selectedDocuments.filter((doc) => doc !== document));
    } else {
      setSelectedDocuments([...selectedDocuments, document]);
    }
  };

  

  return (
    <Grid container spacing={3} justifyContent="center" className="grid-container">
      <Grid item xs={12}>
      
        <Typography variant="h4" align="center">
        {isLoggedIn && (
                <h1>Bienvenido, {loggedInUser}!</h1>
            )}
        </Typography>
      </Grid>
      <Grid item xs={12} sm={6}>
        <FormControl variant="outlined" fullWidth>
          <InputLabel id="organismo-label">Seleccione un organismo</InputLabel>
          <Select
            labelId="organismo-label"
            id="organismo"
            value={organismo}
            onChange={(event) => setOrganismo(event.target.value)}
            label="Seleccione un organismo"
          >
             <MenuItem value="Servicios de Salud de Michoacán">Servicios de Salud de Michoacán</MenuItem>
            <MenuItem value="Sistema Integral de Financiamiento para el Desarrollo de Michoacán (SI Financia)">Sistema Integral de Financiamiento para el Desarrollo de Michoacán (SI Financia)</MenuItem>
            <MenuItem value="Sistema Michoacano de Radio y Televisión SMRyTV">Sistema Michoacano de Radio y Televisión SMRyTV</MenuItem>
            <MenuItem value="Sistema para el Desarrollo Integral de la Familia, Michoacán">Sistema para el Desarrollo Integral de la Familia, Michoacán</MenuItem>
            <MenuItem value="Telebachillerato Michoacán">Telebachillerato Michoacán</MenuItem>
            <MenuItem value="Universidad de la Ciénega del Estado de Michoacán de Ocampo (UCEMICH)">Universidad de la Ciénega del Estado de Michoacán de Ocampo (UCEMICH)</MenuItem>
            <MenuItem value="Universidad Intercultural Indígena del Estado de Michoacán">Universidad Intercultural Indígena del Estado de Michoacán</MenuItem>
            <MenuItem value="Universidad Politécnica de Lázaro Cárdenas Michoacán">Universidad Politécnica de Lázaro Cárdenas Michoacán</MenuItem>
            <MenuItem value="Universidad Politécnica de Uruapan">Universidad Politécnica de Uruapan</MenuItem>
            <MenuItem value="Universidad Tecnológica de Morelia (UTM)">Universidad Tecnológica de Morelia (UTM)</MenuItem>
            <MenuItem value="Universidad Tecnológica del Oriente de Michoacán (UTOM)">Universidad Tecnológica del Oriente de Michoacán (UTOM)</MenuItem>
            <MenuItem value="Universidad Virtual de Michoacán (UNIVIM)">Universidad Virtual de Michoacán (UNIVIM)</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h6" align="center">
          Documentos para Firmar
        </Typography>
        
      </Grid>
      <Grid item xs={12} sm={6}>
        <Tooltip title="">
        <Button
  style={{
    backgroundColor: "#6A0F49",
    color: "white",
    height: "70px",
    marginTop: "1px",
  }}
  variant="contained"
  color="secondary"
  fullWidth
  onClick={() => {
    setSelectedDocuments([]);
    setOpenDialog(false);
    window.open('https://docs.google.com/document/d/1HX5_3qbCmMZdB6rEy2FNJFAXTqjScZe3MaQ2B4C19fs/edit', '_blank');
  }}
>
  Acta de sesion
</Button>




          <Button
          style={{
            backgroundColor: "#6A0F49",
            color: "white",
            marginTop: "25px",
            height: "70px",
            
          }}
            variant="contained"
            color="secondary"
            fullWidth
            onClick={() => {
              setSelectedDocuments([]);
              setOpenDialog(false);
              window.open('https://docs.google.com/document/d/1HX5_3qbCmMZdB6rEy2FNJFAXTqjScZe3MaQ2B4C19fs/edit', '_blank');
            }}
          >
            Acta de reunion
          </Button>
        </Tooltip>
        
      </Grid>
      <Grid item xs={12} sm={6}>
        <Tooltip title="Firmar Documentos Seleccionados">
          <Button
            variant="contained"
            style={{
              backgroundColor: "#6A0F49",
              color: "white",
              marginTop: "1px",
              boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
              borderRadius: "8px",
              height: "70px",
            }}
            fullWidth
          
          >
            Firmar Documentos
          </Button>
        </Tooltip>
      </Grid>
      {/* ... (existing code for dialog) */}
    </Grid>
  );
};

export default Entidad;
