


import React, { useState } from "react";
import { Table, Card, Row, Col, Input, Select, Button } from "antd";
import "antd/dist/reset.css";
import { FolderOutlined } from "@ant-design/icons";
import JSZip from "jszip";
import { saveAs } from "file-saver";

// ... (your existing imports)

function Repositorio() {
  const [yearFilter, setYearFilter] = useState(null);
  const [searchText, setSearchText] = useState("");
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [selectedYear, setSelectedYear] = useState(null);
  const [maintenanceMode, setMaintenanceMode] = useState(false); // New state

  // ... (your existing event handlers)

  // Render maintenance title if in maintenance mode
  if (maintenanceMode) {
    return (
      <div style={{ padding: 20, textAlign: "center" }}>
        <h2>En Mantenimiento</h2>
      </div>
    );
  }

  return (
    <div style={{ padding: 20 }}>
      <h2 style={{ textAlign: "center" }}>Indicadores</h2>
      {/* ... (the rest of your existing JSX) */}
    </div>
  );
}

export default Repositorio;
