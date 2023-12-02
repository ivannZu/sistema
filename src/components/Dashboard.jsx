import React, { useState } from "react";
import { Layout, Menu } from "antd";
import { Link, useLocation } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import './Dashboard.css';
import Entidad from "./Entidad";
import MarcoNormativo from "./MarcoNormativo";
import OrganoGobierno from "./OrganoGobierno";
import SesionesProgramadas from "./SesionesProgramadas";
import SesionProgreso from "./SesionProgreso";
import Archivo from "./Archivo";
import Formatos from "./Formatos";
import Indicadores from "./Indicadores";
import Repositorio from "./Repositorio";
import BuzonReportes from "./BuzonReportes";
import Login from "./Login";
import EscudoImg from "../assets/img/Escudo.png";

const { Header, Content } = Layout;

const menuItems = [
  { path: "/entidad", text: "Entidad" },
  { path: "/marco-normativo", text: "Marco Normativo" },
  { path: "/organos-de-gobierno", text: "Órganos de Gobierno" },
  { path: "/sesiones-programadas", text: "Sesiones programadas" },
  { path: "/sesion-en-progreso", text: "Sesión en progreso" },
  { path: "/archivo", text: "Archivo" },
  { path: "/formatos", text: "Formatos" },
  { path: "/indicadores", text: "Indicadores" },
  { path: "/repositorio", text: "Repositorio" },
  { path: "/buzon-de-reportes", text: "Buzón de Reportes" },
  { path: "/login", text: "Opciones" },
];

function Dashboard() {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Header style={{ background: "#6A0F49", padding: 0, display: "flex", alignItems: "center" }}>
        <div className="logo">

          <span style={{ color: "#fff", fontSize: "1.5rem", fontWeight: "bold" }}>SISOGEM    /</span>
        </div>
        <Menu
          theme="dark"
          mode="horizontal"
          selectedKeys={[location.pathname]}
          style={{ background: "#6A0F49", width: "77%" }}
        >
          {menuItems.map((item) => (
            <Menu.Item key={item.path}>
              <Link to={item.path}>{item.text}</Link>
            </Menu.Item>
          ))}
        </Menu>
      </Header>
      
      
      <Layout>
        <Content style={{ margin: "16px" }}>
          <Routes>
            <Route path="/entidad" element={<Entidad />} />
            <Route path="/marco-normativo" element={<MarcoNormativo />} />
            <Route path="/organos-de-gobierno" element={<OrganoGobierno />} />
            <Route path="/sesiones-programadas" element={<SesionesProgramadas />} />
            <Route path="/sesion-en-progreso" element={<SesionProgreso />} />
            <Route path="/archivo" element={<Archivo />} />
            <Route path="/formatos" element={<Formatos />} />
            <Route path="/indicadores" element={<Indicadores />} />
            <Route path="/repositorio" element={<Repositorio />} />
            <Route path="/buzon-de-reportes" element={<BuzonReportes />} />
            <Route path="/Opciones" element={<Login />} />


          </Routes>
        </Content>
      </Layout>
      <ToastContainer />
    </Layout>
    
  );
}

export default Dashboard;
