import React from 'react';
import Layout from './components/Layout';
import Banner from './components/Banner';
import About from './components/About';
import Technology from './components/Technology';
import MySelf from './components/MySelf';
import Resume from './components/Resume';
import Experience from './components/Experience';
import Blog from './components/Blog';
import Contact from './components/Contact';

function App() {
  return (
    <>
    <Banner/>
    <Layout>
      <About/>
      <Technology/>
      <MySelf/>
      <Resume/>
      <Experience/>
      <Blog/>
      <Contact/>
    </Layout>
    </>
  );
}

export default App;