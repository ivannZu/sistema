import React, { useState, useEffect } from 'react';
import { Upload, Button, Table, Input, Row, Col, message, Popconfirm, Modal } from 'antd';
import { UploadOutlined, DeleteOutlined, EyeOutlined, DownloadOutlined } from '@ant-design/icons';

function Repositorio() {
  const [files, setFiles] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);

  // Cargar datos desde localStorage al iniciar
  useEffect(() => {
    const loadedFiles = JSON.parse(localStorage.getItem('files')) || [];
    setFiles(loadedFiles);
  }, []);

  // Guardar datos en localStorage cada vez que los archivos cambien
  useEffect(() => {
    localStorage.setItem('files', JSON.stringify(files));
  }, [files]);

  const handleUpload = ({ file, onSuccess }) => {
    setTimeout(() => {
      const newFile = {
        key: file.uid,
        name: file.name,
        size: `${file.size / 1000}KB`,
        uploadedDate: new Date().toISOString().split('T')[0]
      };
      setFiles(prevFiles => [...prevFiles, newFile]);
      onSuccess("Subida exitosa");
      message.success(`${file.name} subido exitosamente`);
    }, 1000);
  };

  const handleDelete = (key) => {
    setFiles(prevFiles => prevFiles.filter(file => file.key !== key));
    message.success('Archivo eliminado');
  };

  const showFileDetails = (file) => {
    setSelectedFile(file);
    setIsModalVisible(true);
  };

  const handleDownload = (file) => {
    message.info(`Descargando ${file.name}`);
  };

  const filteredFiles = files.filter(file => file.name.toLowerCase().includes(searchText.toLowerCase()));

  const columns = [
    { title: 'Nombre', dataIndex: 'name', key: 'name' },
    { title: 'Tamaño', dataIndex: 'size', key: 'size' },
    { title: 'Fecha de Subida', dataIndex: 'uploadedDate', key: 'uploadedDate' },
    {
      title: 'Acciones',
      key: 'actions',
      render: (_, record) => (
        <>
          <Button icon={<EyeOutlined />} onClick={() => showFileDetails(record)} style={{ marginRight: 8 }} />
          <Button icon={<DownloadOutlined />} onClick={() => handleDownload(record)} style={{ marginRight: 8 }} />
          <Popconfirm title="¿Seguro que quieres eliminar este archivo?" onConfirm={() => handleDelete(record.key)}>
            <Button icon={<DeleteOutlined />} type="danger" />
          </Popconfirm>
        </>
      ),
    },
  ];

  return (
    <div style={{ padding: 20 }}>
      <h2 style={{ textAlign: 'center' }}>Gestión de Archivos</h2>
      <Row gutter={16} style={{ marginBottom: 20 }}>
        <Col span={12}>
          <Upload customRequest={handleUpload}>
            <Button icon={<UploadOutlined />}>Subir Archivo</Button>
          </Upload>
        </Col>
        <Col span={12}>
          <Input
            placeholder="Buscar archivos..."
            value={searchText}
            onChange={e => setSearchText(e.target.value)}
          />
        </Col>
      </Row>
      <Table dataSource={filteredFiles} columns={columns} />

      <Modal
        title="Detalles del Archivo"
        visible={isModalVisible}
        onOk={() => setIsModalVisible(false)}
        onCancel={() => setIsModalVisible(false)}
      >
        {selectedFile && (
          <div>
            <p>Nombre: {selectedFile.name}</p>
            <p>Tamaño: {selectedFile.size}</p>
            <p>Fecha de Subida: {selectedFile.uploadedDate}</p>
          </div>
        )}
      </Modal>
    </div>
  );
}

export default Repositorio;
