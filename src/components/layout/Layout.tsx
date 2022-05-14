import React from 'react'
import { Navbar } from '../navbar/Navbar';

interface Properties {
    children?: React.ReactNode;
}

export const Layout: React.FC<Properties> = ({children}) => {
  return (
    <div>
        <Navbar/>
        {children}
    </div>
  )
}
