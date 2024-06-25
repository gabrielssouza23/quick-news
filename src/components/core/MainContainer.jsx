// src/components/MainContainer.jsx
import React from 'react';



// eslint-disable-next-line react/prop-types
const MainContainer = ({ children }) => {
  return (
    <div className="main-container">
      {children}
    </div>
  );
};

export default MainContainer;
