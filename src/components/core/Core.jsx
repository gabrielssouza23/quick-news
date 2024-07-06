// src/components/Core.jsx
import React from 'react';
import Layout from './Layout';
import MainContainer from './MainContainer';
import Section from '../section/Section';
import Header from '../header/Header';
import Footer from '../Footer/Footer';

const Core = ({selectedCategory}) => {

  return (
    <div className="page">
    <Header />
      <MainContainer>
        <Section selectedCategory={selectedCategory}/>
      </MainContainer>
    <Footer />
    </div>
  );
};

export default Core;
