
import React, { useEffect, useState } from 'react';
import Layout from '../components/layout'
import HomeSection from '@/components/home/page';
import { Metadata } from 'next';

export const metadata: Metadata = { 
  title: 'Home',
  description: '',
}

export default function Home() {
  const seoTitle = 'Home'
  return (
    <>  
      <Layout seoData={seoTitle}>
        <HomeSection />
      </Layout>
    </>
  );
}
