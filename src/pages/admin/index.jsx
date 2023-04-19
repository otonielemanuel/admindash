import React, { useState } from 'react'
import { Container } from '../../styles/global/GlobalStyles'
import Navbar from '../../components/navbar';
import Sidebar from '../../components/sidebar';


export default function index() {

  const [sidebarOpen, setSidebarOpen] = useState(false);
  
  const openSidebar = () => setSidebarOpen(true)
  const closeSidebar = () => setSidebarOpen(false)


  return (
    <Container>
      <Navbar sidebarOpen={sidebarOpen} openSidebar={openSidebar} />
      <Sidebar sidebarOpen={sidebarOpen} closeSidebar={closeSidebar} />
    </Container>
  )
}
