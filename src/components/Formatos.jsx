import React from 'react';
import { Space, Card } from 'antd';
import {
  FundViewOutlined,
  TeamOutlined,
  SolutionOutlined,
  BankOutlined,
} from '@ant-design/icons';

const FormatosMenu = () => {
  const formatos = [
    { name: 'Convocatoria', icon: <FundViewOutlined style={{ fontSize: '50px', transition: 'transform 0.3s ease-in-out' }} />, link: 'https://www.pdffiller.com/jsfiller-desk21/?requestHash=4a8edffb14f4de8ee6218bc9326e0fc354fa968bfe061d92a7dffe4e26b28773&lang=es&projectId=1403108405&loader=tips&MEDIUM_PDFJS=true&PAGE_REARRANGE_V2_MVP=true&richTextFormatting=true&isPageRearrangeV2MVP=true&jsf-page-rearrange-v2=true&jsf-new-header=false&jsf-document-scroll-zoom=true&jsf-redesign-full=false&routeId=2f11414519667f42664797889b5a32eb#38197a17e2f0471886c7e03b21985ae1' },
    { name: 'Orden del dia', icon: <TeamOutlined style={{ fontSize: '50px', transition: 'transform 0.3s ease-in-out' }} />, link: 'https://example.com/orden-del-dia' },
    { name: 'Acta de sesion', icon: <SolutionOutlined style={{ fontSize: '50px', transition: 'transform 0.3s ease-in-out' }} />, link: 'https://example.com/acta-de-sesion' },
    { name: 'Estados financieros', icon: <BankOutlined style={{ fontSize: '50px', transition: 'transform 0.3s ease-in-out' }} />, link: 'https://example.com/estados-financieros' },
  ];

  const handleCardClick = (event, link) => {
    event.preventDefault();
    window.open(link, '_blank');
  };

  return (
    <div style={{ padding: '20px', background: 'linear-gradient(to right, #6A0F49, #D1478C)', minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Space size={20} style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
        {formatos.map((formato, index) => (
          <a key={index} href={formato.link} style={{ textDecoration: 'none' }}>
            <Card
              hoverable
              style={{
                width: '200px',
                height: '180px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                borderColor: '#fff',
                color: '#fff',
                borderRadius: '10px',
                boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                background: 'linear-gradient(to right, #F29B91, #6A0F49)',
                transition: 'transform 0.3s ease-in-out',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.05)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
              }}
              onClick={(e) => handleCardClick(e, formato.link)}
            >
              {formato.icon}
              <p style={{ marginTop: '10px', textAlign: 'center' }}>{formato.name}</p>
            </Card>
          </a>
        ))}
      </Space>
    </div>
  );
};

export default FormatosMenu;
