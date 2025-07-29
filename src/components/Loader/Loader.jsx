import React from 'react';

function Loader() {
  return (
    <div style={{
      minHeight: '60vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'transparent'
    }}>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '18px'
      }}>
        <span className="material-symbols-rounded" style={{
          fontSize: 56,
          color: '#9D37F2',
          animation: 'spin 1.2s linear infinite'
        }}>progress_activity</span>
        <span style={{
          color: '#a0a0a0',
          fontWeight: 600,
          fontSize: 18,
          letterSpacing: 1
        }}>Carregando...</span>
        <style>
          {`
            @keyframes spin {
              0% { transform: rotate(0deg);}
              100% { transform: rotate(360deg);}
            }
          `}
        </style>
      </div>
    </div>
  );
}

export default Loader;
