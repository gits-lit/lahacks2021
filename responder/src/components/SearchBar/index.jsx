import React, { useState } from 'react';
import './style.scss';

import search from '.../../../public/search.svg'

const SearchBar = (props) => {
  const [caseId, setCaseId] = useState('');

  return (
    <div className="searchbar">
      <div className="search-header">Search by Case ID</div>
      <input
        onChange={e => setCaseId(e.target.value)}
        type="text"
        value={caseId}
        />
      <img className = "search" src={search} alt="search"/>
    </div>
  )
}

export default SearchBar;
