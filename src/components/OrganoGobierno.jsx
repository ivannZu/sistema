import React, { useState, useEffect } from 'react';
import { Form, Input, Button, Select, Table, Upload, Modal, Space } from 'antd';
import { ExclamationCircleOutlined, UploadOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons';
import { Tooltip } from 'antd';

const { Option } = Select;
const { confirm } = Modal;

const loadIntegrantesFromStorage = () => {
  const storedIntegrantes = localStorage.getItem('integrantes');
  return storedIntegrantes ? JSON.parse(storedIntegrantes) : [];
};

const saveIntegrantesToStorage = (integrantes) => {
  localStorage.setItem('integrantes', JSON.stringify(integrantes));
};

const OrganoGobierno = () => {
  const [integrantes, setIntegrantes] = useState(loadIntegrantesFromStorage());
  const [editingIndex, setEditingIndex] = useState(-1);
  const [form] = Form.useForm();
  const [isFormVisible, setIsFormVisible] = useState(false);

  const onFinish = (values) => {
    if (editingIndex === -1) {
      setIntegrantes([...integrantes, values]);
    } else {
      integrantes[editingIndex] = values;
      setIntegrantes([...integrantes]);
      setEditingIndex(-1);
    }
    form.resetFields();
    setIsFormVisible(false);
  };

  const showDeleteConfirm = (index) => {
    confirm({
      title: '¿Estás seguro de eliminar este integrante?',
      icon: <ExclamationCircleOutlined />,
      okText: 'Sí',
      okType: 'danger',
      cancelText: 'No',
      onOk() {
        const updatedIntegrantes = [...integrantes];
        updatedIntegrantes.splice(index, 1);
        setIntegrantes(updatedIntegrantes);
      },
    });
  };

  useEffect(() => {
    // Save integrantes to localStorage whenever it changes
    saveIntegrantesToStorage(integrantes);
  }, [integrantes]);

  const columns = [
    {
      title: 'Nombre',
      dataIndex: 'nombre',
      key: 'nombre',
    },
    {
      title: 'Cargo',
      dataIndex: 'cargo',
      key: 'cargo',
    },
    {
      title: 'Correo',
      dataIndex: 'correo',
      key: 'correo',
    },
    {
      title: 'Documentos',
      dataIndex: 'documentos',
      key: 'documentos',
      render: (files) => (files ? files.map((file) => file.name).join(', ') : 'N/A'),
    },
    {
      title: 'Acciones',
      key: 'acciones',
      render: (text, record, index) => (
        <Space size="middle">
          <Button type="link" onClick={() => setEditingIndex(index)}>
            <EditOutlined />
          </Button>
          <Button type="link" danger onClick={() => showDeleteConfirm(index)}>
            <DeleteOutlined />
          </Button>
        </Space>
      ),
    },
  ];

  return (
    <div className="organo-gobierno-container">
      <div className="header-container">
        <Button type="primary" onClick={() => setIsFormVisible(true)}>
          Agregar Integrante
        </Button>
      </div>

      {isFormVisible && (
        <Form
          form={form}
          name="organoGobiernoForm"
          onFinish={onFinish}
          initialValues={integrantes[editingIndex]}
        >
          <Form.Item
            name="nombre"
            label="Nombre"
            rules={[{ required: true, message: 'Por favor, ingresa el nombre' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="cargo"
            label="Cargo"
            rules={[{ required: true, message: 'Por favor, ingresa el cargo' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="correo"
            label="Correo"
            rules={[
              { required: true, message: 'Por favor, ingresa el correo' },
              { type: 'email', message: 'Ingresa un correo válido' },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="documentos"
            label="Documentos"
            valuePropName="fileList"
            getValueFromEvent={(e) => e.fileList}
          >
            <Upload beforeUpload={() => false} multiple>
              <Button icon={<UploadOutlined />}>Subir archivos</Button>
            </Upload>
          </Form.Item>

          <div style={{ margin: '10px 0' }}>
            <Button type="primary" htmlType="submit" style={{ marginRight: '10px' }}>
              {editingIndex === -1 ? 'Agregar' : 'Actualizar'}
            </Button>
            <Button onClick={() => setIsFormVisible(false)}>Cancelar</Button>
          </div>
        </Form>
      )}

      <div className="list-container">
        <Table columns={columns} dataSource={integrantes} />
      </div>
    </div>
  );
};

export default OrganoGobierno;
