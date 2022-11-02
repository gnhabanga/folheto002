import React from 'react'
import Footer from './Footer/Footer'
import Navbar from './Navbar/Navbar'

function Layout({children}) {
  return (
    <>
    <div className='bg-dryGray text-white'>
        <Navbar />
        {children}
        <Footer />
    </div>
    </>
  )
}

export default Layout