import React from 'react';
import DefaultNavbarSearch from '@theme-original/Navbar/Search';
import { useLocation } from '@docusaurus/router';

export default function NavbarSearchWrapper(props) {
  const location = useLocation();
  // Hide navbar search on homepage only
  if (location.pathname === '/') {
    return null;
  }
  return <DefaultNavbarSearch {...props} />;
}
