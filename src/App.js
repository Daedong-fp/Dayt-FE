import React from 'react';
import { GlobalStyle } from './components/GlobalStyle';
import { Header } from './components/Header';
import { CTA } from './components/CTA';
import { Features } from './components/Features';
import { Kanban } from './components/Kanban';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { LoginPage } from './pages/LoginPage';

function HomePage() {
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

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/login' element={<LoginPage />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
