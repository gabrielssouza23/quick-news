// src/components/Core.jsx
import React from 'react';
import Layout from './Layout';
import MainContainer from './MainContainer';
import Section from '../section/Section';

const Core = () => {
  return (
    <Layout>
      <MainContainer>
        <Section />
      </MainContainer>
    </Layout>
  );
};

export default Core;
