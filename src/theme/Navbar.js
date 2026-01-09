import React from 'react';
import DefaultNavbar from '@theme-original/Navbar';

export default function Navbar(props) {
  // No-op wrapper: keep default Navbar behavior (content override handles hiding search on homepage)
  return <DefaultNavbar {...props} />;
}
