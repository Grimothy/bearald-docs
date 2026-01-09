import React, {useEffect} from 'react';
import SearchBar from '@theme-original/SearchBar';
import {useLocation} from '@docusaurus/router';

export default function SearchBarWrapper(props) {
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    if (!isHome) return;
    const input = document.querySelector('.navbar__search-input');
    if (!input) return;
    const prev = input.getAttribute('placeholder');
    const newPlaceholder = "Search the docs — Try 'Azure AD setup'";
    input.setAttribute('placeholder', newPlaceholder);
    return () => {
      if (input) input.setAttribute('placeholder', prev || 'Search');
    };
  }, [isHome]);

  return <SearchBar {...props} />;
}
