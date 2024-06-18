import { React } from "react";


function SearchBox () {
    <div className="search-box">
          <input 
            type="text"
            className="search-bar"
            placeholder="Search"
            onChange={e => setQuery(e.target.value)}
            value={query}
            onKeyPress={search} 
            autofocus
          /> 
    </div> 
}

export default SearchBox;