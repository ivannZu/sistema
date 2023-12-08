import React, { useState } from 'react';
import { Card, Menu, Upload, message, Table, Space, Row, Col, Pagination, Spin, Modal } from 'antd';
import { UploadOutlined, EyeOutlined, DownloadOutlined } from '@ant-design/icons';
import './MarcoNormativo.css';
import { Tooltip } from 'antd';

const { SubMenu } = Menu;
const { Dragger } = Upload;
const { Column } = Table;

const UploadCard = () => {
  const [selectedMenuItem, setSelectedMenuItem] = useState('option1');
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [menuText, setMenuText] = useState('Panel de gestion de documentos');
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [menuOptionSelected, setMenuOptionSelected] = useState(false);
  const [previewFile, setPreviewFile] = useState(null);

  const itemsPerPage = 5;

  const handleMenuClick = (e) => {
    setSelectedMenuItem(e.key);
    setMenuText(e.item.props.children);
    setMenuOptionSelected(true);
    
  };

  const handleFileUpload = (info) => {
    setIsLoading(true);



    if (info.file.status === 'done') {
      const uploadedFile = {
        ...info.file,
        url: 'URL_DEL_ARCHIVO',
        option: selectedMenuItem
      };

      message.success(`${info.file.name} El archivo se subió con éxito.`);
      setUploadedFiles([...uploadedFiles, uploadedFile]);
    } else if (info.file.status === 'error') {
      message.error(`${info.file.name} Error al Subir el Archivo.`);
    }

    setIsLoading(false);
  };

  const customRequest = ({ onSuccess }) => {
    setTimeout(() => {
      onSuccess();
    }, 0);
  };

  const handlePreview = (file) => {
    setPreviewFile(file);
  };

  const handleDeleteFile = (uid) => {
    const updatedFiles = uploadedFiles.filter(file => file.uid !== uid);
    setUploadedFiles(updatedFiles);
  };

  const fileTypes = ['.pdf'];
  const acceptTypes = fileTypes.join(',');

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, uploadedFiles.length);
  const paginatedFiles = uploadedFiles.slice(startIndex, endIndex);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const UploadedFilesDisplay = ({ files, handlePreview, handleDeleteFile }) => (
    <Row gutter={16}>
      {files.map((file) => (
        <Col key={file.uid} span={4} className="uploaded-file-box">
          <Dragger showUploadList={false} key={file.uid}>
          
            <p className="ant-upload-text">{file.name}</p>
          </Dragger>
          <Space size="middle">
            
            <a href={file.url} download>
              <DownloadOutlined />
            </a>
            <a onClick={() => handleDeleteFile(file.uid)}>Eliminar</a>
          </Space>
        </Col>
      ))}
    </Row>
  );

  const documentTypes = ['Decreto o Ley de Creación.', 'Reglamento interior.', 'Manual organizacional.', 'Manual de procedimientos.', 'Ordenamientos que regulan la administración'];

  const uploadBoxes = documentTypes.map((type, index) => (
    <Col key={index} span={4} className="upload-box">
      <Dragger
        onChange={handleFileUpload}
        showUploadList={false}
        customRequest={customRequest}
        beforeUpload={(file) => {
          const fileType = file.name.slice(file.name.lastIndexOf('.')).toUpperCase();
          
          handlePreview(file);
          return true;
        }}
        accept={acceptTypes}
      >
        
        <p className="ant-upload-text">
          seleccionar el archivo PDF que corresponde.
        </p>
        <p className="ant-upload-title">Subir documento {type}</p>
      </Dragger>
    </Col>
  ));
  

  return (
    <Card title={<span className="card-title">Marco Normativo Vigente</span>}>
      <Row gutter={16}>
        <Col span={24} className="menu-col fixed-menu">
          <Menu
            onClick={handleMenuClick}
            selectedKeys={[selectedMenuItem]}
            mode="horizontal"
            className="custom-menu"
          >
            <Tooltip title="Panel de gestion de documentos">
              <SubMenu key="sub1" title={<span className="menu-text">{menuText}</span>}>
                
                
              </SubMenu>
            </Tooltip>
          </Menu>
        </Col>
      </Row>
      <Row gutter={16} className="upload-row">
        {uploadBoxes}
      </Row>
      <Row gutter={16}>
        <Col span={24} className="list-col">
          <div className="list-container">
            {uploadedFiles.length > 0 && (
              <UploadedFilesDisplay
                files={uploadedFiles}
                handlePreview={handlePreview}
                handleDeleteFile={handleDeleteFile}
              />
            )}
          </div>
          <Pagination
            current={currentPage}
            pageSize={itemsPerPage}
            total={uploadedFiles.length}
            onChange={handlePageChange}
          />
        </Col>
      </Row>
      <Modal
   
      >
        {previewFile && (
          <embed src={previewFile.url} type="application/pdf" width="100%" height="500px" />
        )}
      </Modal>
    </Card>
  );
};

export default UploadCard;
