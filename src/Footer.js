import React from 'react';

const Footer = () => {
  const footerStyle = {
    backgroundColor: '#333',
    color: '#fff',
    textAlign: 'center',
    padding: '10px',
    position: 'fixed',
    left: '0',
    bottom: '0',
    width: '100%'
  };

  return (
    <div style={footerStyle}>
      <p>Copyright © {new Date().getFullYear()}
        <span> Your Company</span> All Rights Reserved.</p>
    </div>
  );
}

export default Footer;
