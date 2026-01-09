import React from 'react';
import SearchBar from '@theme-original/SearchBar';
import {useLocation} from '@docusaurus/router';

export default function SearchBarWrapper(props) {
  const location = useLocation();
  const isHome = location.pathname === '/';
  return (
    <div className={isHome ? 'search-homepage' : undefined}>
      <SearchBar {...props} />
    </div>
  );
}
