import React from 'react';
import { GlobalStyle } from './components/GlobalStyle';
import { Header } from './components/Header';
import { CTA } from './components/CTA';
import { Features } from './components/Features';
import { Kanban } from './components/Kanban';

function App() {
  return (
    <>
      <GlobalStyle />
        <Header />
        <CTA />
        <Features />
        <Kanban />
    </>
  );
}

export default App;