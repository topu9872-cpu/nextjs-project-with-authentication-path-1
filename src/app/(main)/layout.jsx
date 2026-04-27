/** 
 * ! this is google dns you can get inform in chatgpt or gemini .
 */
import dns from 'node:dns';
dns.setServers(['8.8.8.8', '8.8.4.4'])
//...........................................
import BrakingNews from '@/components/shared/BrakingNews';
import Header from '@/components/shared/Header';
import NavBar from '@/components/shared/NavBar';
import React from 'react';

const MainLayout = ({children}) => {
  return (
    <div>
      <Header/>
      <BrakingNews/>
      <NavBar/>
      {children}
    </div>
  );
};

export default MainLayout;