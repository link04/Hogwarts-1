import React, { PureComponent } from 'react';

const SearchForm = (props) => {
    return (
      <div className="">
          <h4>Search Characters</h4>
            <input type="text" placeholder="Type Name or House Name" onChange={props.handleSearchChange} />
      </div>
    );
}

export default SearchForm;
