import React, { useState } from "react"
import Navbar from "./Navbar"
import Sidebar from "./Sidebar"
import Footer from "./Footer"
const Layout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleSideBar = () => setIsOpen(!isOpen);
  return (
    <>
      <Navbar toggleSideBar={toggleSideBar} />
      <Sidebar isOpen={isOpen} toggleSideBar={toggleSideBar} />
      {children}
      <Footer />
    </>
  )
}

export default Layout
