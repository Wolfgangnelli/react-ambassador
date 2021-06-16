import React from 'react';
import './index.css';
import AuthenticationRoutes from '../components/AuthenticationRoutes';
import Content from '../components/Content';

function App() {
  return (
    <div>
      <AuthenticationRoutes />
      <Content />      
    </div>
  );
}

export default App;
