import React from 'react';
import { Link } from 'react-router-dom';

interface Properties {
  to: string;
  children?: React.ReactNode;
}

export const AppLink: React.FC<Properties> = ({ to, children }) => {
  return (
    <Link to={to} style={{ textDecoration: 'none', color: 'inherit' }}>
      {children}
    </Link>
  );
};
