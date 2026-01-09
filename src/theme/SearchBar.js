import React from 'react';
import DefaultSearchBar from '@theme-original/SearchBar';

export default function SearchBarWrapper(props) {
  // Render default SearchBar for all usages (homepage page search included)
  return <DefaultSearchBar {...props} />;
}
