import React from 'react';
import menubarData from '../utils/menubar';
import MenuBar from "@/components/menubar/page";
import Seo from '../components/seo';
import Footer from './footer/page';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Fonts',
  description: '...',
}


interface SeoData {
  title: string;
}

export default function Layout({
  children, seoData
}: Readonly<{ children: React.ReactNode; seoData?: any }>) {
  const title = seoData;
  const menuData: any = menubarData;
  return (
    <>
      <Seo title={title} />
      <MenuBar data={menuData?.data?.attributes} />
      {children}
      <Footer />
    </>
  )
}
