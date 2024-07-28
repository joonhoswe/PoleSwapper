import Navbar from './navbar'
import Footer from './footer'
import Head from "next/head"
import { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}
 
export default function Layout({ children } : LayoutProps) {
  return (
    <div className=''>
     <Head>
        <title></title>
        <meta name="description" content="" />
      </Head>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  )
}