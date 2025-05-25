import React, { Suspense, lazy } from 'react';
import Layout from '../components/Layout';
import Banner from '../components/Banner';

// Lazy load components
const About = lazy(() => import('../components/About'));
const Technology = lazy(() => import('../components/Technology'));
const MySelf = lazy(() => import('../components/MySelf'));
const Resume = lazy(() => import('../components/Resume'));
const Experience = lazy(() => import('../components/Experience'));
const Contact = lazy(() => import('../components/Contact'));

// Simple loading text
const LoadingFallback = () => <div>Loading...</div>;

function Home() {
  return (
    <>
      <Banner/>
      <Layout>
        <Suspense fallback={<LoadingFallback />}>
          <About/>
          <Technology/>
          <MySelf/>
          <Resume/>
          <Experience/>
          <Contact/>
        </Suspense>
      </Layout>
    </>
  );
}

export default Home;
